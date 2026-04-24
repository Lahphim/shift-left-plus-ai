// cypress/support/commands.js
import { accessibilityBrainPrompt } from './brain-prompt';

const callOpenRouter = (prompt, apiKey, model) => {
    const url = 'https://openrouter.ai/api/v1/chat/completions';
    
    return cy.request({
        method: 'POST',
        url: url,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'My A11y'
        },
        body: {
            model: model,
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.7
        }
    });
};

const callGemini = (prompt, apiKey) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    return cy.request({
        method: 'POST',
        url: url,
        body: {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json"
            }
        }
    });
};

Cypress.Commands.add('verifyWithBrain', (selector, options = {}) => {
    const provider = options.provider || Cypress.env('AI_PROVIDER') || 'openrouter';
    
    cy.get(selector).then(($el) => {
        const html = $el.html();
        const text = $el.text();
        const prompt = accessibilityBrainPrompt(html, text);
        
        let requestPromise;
        
        if (provider === 'openrouter') {
            const apiKey = Cypress.env('OPENROUTER_API_KEY');
            const model = options.model || Cypress.env('OPENROUTER_MODEL') || 'gpt-4-turbo';
            if (!apiKey) {
                throw new Error('OPENROUTER_API_KEY is not defined in Cypress environment (e.g., cypress.env.json)');
            }
            requestPromise = callOpenRouter(prompt, apiKey, model).then((response) => {
                expect(response.status).to.eq(200);
                let responseText = response.body.choices[0].message.content;
                
                // OpenRouter sometimes returns text with markdown code blocks, clean it up
                responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
                
                try {
                    const result = JSON.parse(responseText);
                    return result;
                } catch (e) {
                    cy.log('Failed to parse JSON from OpenRouter response:', responseText);
                    throw new Error(`Invalid JSON response from OpenRouter: ${e.message}`);
                }
            });
        } else if (provider === 'gemini') {
            const apiKey = Cypress.env('GEMINI_API_KEY');
            if (!apiKey) {
                throw new Error('GEMINI_API_KEY is not defined in Cypress environment (e.g., cypress.env.json)');
            }
            requestPromise = callGemini(prompt, apiKey).then((response) => {
                expect(response.status).to.eq(200);
                const responseText = response.body.candidates[0].content.parts[0].text;
                const result = JSON.parse(responseText);
                return result;
            });
        } else {
            throw new Error(`Unknown AI provider: ${provider}`);
        }
        
        return requestPromise.then((result) => {
            Cypress.log({
                name: 'verifyWithBrain',
                message: `Provider: ${provider} | Status: ${result.status}`,
                consoleProps: () => result
            });
            
            return cy.wrap(result);
        });
    });
});
