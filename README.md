# Shift Left + AI - Accessibility Testing with AI Integration

## Overview

Shift Left + AI is a modern web application designed as a testbed for accessibility (a11y) testing and validation. The project combines traditional accessibility tools like axe-core with cutting-edge AI integration to provide comprehensive WCAG compliance checking through intelligent analysis.

The core concept is a simple Single Page Application (SPA) that intentionally includes accessibility violations, serving as the perfect foundation for developing and testing system-level accessibility tests. By integrating AI with preset prompts specifically designed for Thai language content, the project demonstrates how artificial intelligence can enhance accessibility auditing processes.

## Main Idea

This project serves as a primary web application for writing system tests, with an additional layer of AI-powered WCAG compliance verification using carefully crafted preset prompts. The AI integration focuses on Thai language accessibility guidelines, providing intelligent suggestions for improving content clarity and compliance.

## Features

### Core Functionality
- **Simple SPA Architecture**: Clean, minimal web application built with vanilla JavaScript and Vite
- **Intentionally Inaccessible Content**: Pages designed with deliberate WCAG violations for testing purposes
- **Thai Language Support**: Full support for Thai content with appropriate fonts and language handling

### Accessibility Testing
- **axe-core Integration**: Industry-standard accessibility testing tool
- **Cypress E2E Testing**: Comprehensive end-to-end testing with Cucumber BDD framework
- **AI-Powered Analysis**: Intelligent WCAG compliance checking using AI models

### AI Integration
- **Multiple AI Providers**: Support for OpenRouter and Google Gemini APIs
- **Preset Prompts**: Specialized prompts for Thai language accessibility analysis
- **WCAG Focus Areas**:
  - 3.1.5 Reading Level: Complex sentence detection
  - 2.4.10 Section Headings: Meaningful heading validation
  - 2.4.9 Link Purpose: Clear link text verification
  - 3.1.4 Abbreviations: Acronym expansion requirements

## Tech Stack

### Frontend
- **Vite**: Fast build tool and development server
- **Vanilla JavaScript**: No framework dependencies for simplicity
- **CSS**: Custom styling with Google Fonts (Inter + Noto Sans Thai)

### Testing & Quality Assurance
- **Cypress**: End-to-end testing framework
- **Cucumber**: BDD testing with Gherkin syntax
- **axe-core**: Accessibility testing engine
- **Vitest**: Unit testing framework

### AI Integration
- **OpenRouter API**: Access to multiple AI models
- **Google Gemini API**: Google's generative AI service
- **Custom Prompts**: Specialized for Thai accessibility analysis

## Project Structure

```
shift-left-plus-ai/
├── src/
│   ├── components/           # Page components (Home, About, Contact)
│   ├── assets/               # Static assets
│   ├── main.js               # Application entry point
│   ├── router.js             # SPA routing logic
│   └── style.css             # Global styles
├── cypress/
│   ├── e2e/
│   │   ├── features/         # Cucumber feature files
│   │   └── step_definitions/ # Step implementations
│   └── support/              # Custom commands and utilities
├── public/                   # Static files
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── cypress.config.js         # Cypress configuration
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shift-left-plus-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp cypress.env.example.json cypress.env.json
   ```

   Edit `cypress.env.json` and add your AI API keys:
   ```json
   {
     "AI_PROVIDER": "openrouter",
     "OPENROUTER_API_KEY": "your-openrouter-key",
     "OPENROUTER_MODEL": "gpt-4-turbo",
     "GEMINI_API_KEY": "your-gemini-key"
   }
   ```

## Usage

### Development
```bash
yarn dev
```
Starts the Vite development server at `http://localhost:5173`

### Testing

#### Unit Tests
```bash
yarn test:unit
```

#### E2E Tests
```bash
# Open Cypress Test Runner
yarn cy:open

# Run tests headlessly (requires dev server running)
yarn cy:run
```

**Note**: The dev server must be running before executing `yarn cy:run`. In a new terminal, start the server with `yarn dev`.

### Build for Production
```bash
yarn build
yarn preview
```

## Test Report Pattern

When running `yarn cy:run`, you'll see a comprehensive report following this pattern:

### Report Structure
```
(Run Starting)
├─ Specs: Number of feature files found
└─ Specs to run: 5 found (00_api_connection.feature, about.feature, etc.)

Per-Spec Results:
├─ Spec Name (e.g., about.feature)
├─ Tests: Total | Passing | Failing | Screenshots
└─ Failures: Reason + Suggested Fix from AI

(Run Finished)
└─ Summary Table: Overall stats + Pass/Fail rate
```

### Expected Output Patterns

**✅ Passing Test:**
- Basic feature verification tests pass (e.g., "Display vague section headings")
- Feature existence tests pass

**❌ Failing Test:**
- AI Brain verification tests intentionally fail with detailed feedback:
  - **REASON**: Specific WCAG violations detected
  - **SUGGESTED FIX**: AI-generated remediation suggestions
  - **Screenshots**: Captured for debugging

### Example Summary
```
Spec                     Tests  Passing  Failing  
✔ 00_api_connection     1      1        -        
✖ about.feature         4      3        1        
✖ contact.feature       4      3        1        
✖ home.feature          5      4        1        
✖ navigation.feature    3      2        1        
─────────────────────────────────
✖ 4 of 5 failed (80%)   17     13       4        
```

### Interpretation
- **API Connection**: Verifies AI service availability (should always pass)
- **Basic Display Tests**: Confirm pages render with intentional violations (pass)
- **AI Brain Tests**: Detect accessibility issues and provide recommendations (expected to fail/demonstrate AI analysis)
- **Overall**: The project is working correctly—failures demonstrate successful AI detection of WCAG issues

## Example Test Output

Here's a real example of the test report when running `yarn cy:run` (with dev server running):

### AI Brain Analysis Example (Expected Failure)
```
1) Home Page Component
     Verify accessibility with AI Brain:

    AssertionError: 

======================================================
 ❌ ACCESSIBILITY VIOLATION FOUND
======================================================

 🔍 REASON:
    เนื้อหามีการใช้คำเชื่อมซ้อนกันในประโยคและหัวข้อไม่ชัดเจน รวมถึงมีคำย่อที่ไม่มีการอธิบายและลิงก์ที่ไม่ชัดเจน

 💡 SUGGESTED FIX:
    ปรับประโยคให้สั้นและกระชับโดยไม่ใช้คำเชื่อมซ้อน เช่น แยกประโยคให้ชัดเจน พร้อมปรับหัวข้อให้สื่อความหมายชัดเจน เช่น 'บริการของเรา' แทน 'ส่วนที่ 1' และเพิ่มคำเต็มสำหรับคำย่อ เช่น 'คณะรัฐมนตรี (ครม.)' และ 'กรุงเทพมหานคร (กทม.)'

======================================================
: expected 'FAIL' to equal 'PASS'
```

### Test Summary Table
```
Spec                                              Tests  Passing  Failing  Pending  Skipped  
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✔  00_api_connection.feature                316ms        1        1        -        -        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✖  about.feature                            00:05        4        3        1        -        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✖  contact.feature                          00:04        4        3        1        -        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✖  home.feature                             00:03        5        4        1        -        - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✖  navigation.feature                       00:03        3        2        1        -        - │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
  ✖  4 of 5 failed (80%)                      00:16       17       13        4        -        -
```

### Key Insights from Example
- **AI Successfully Detects Issues**: The AI brain correctly identifies WCAG violations in Thai content
- **Detailed Feedback**: Provides specific reasons and actionable suggestions in Thai
- **Expected Behavior**: Tests are designed to fail to demonstrate AI capabilities
- **80% Failure Rate**: Indicates the AI is working (detecting intentional violations)

## Accessibility Testing Workflow

1. **Manual Review**: Examine the intentionally inaccessible content
2. **axe-core Analysis**: Run automated accessibility scans
3. **AI Verification**: Use AI-powered analysis for deeper insights
4. **Test Development**: Write comprehensive test cases using the findings

## AI Integration Details

The AI integration uses specialized prompts designed for Thai language accessibility analysis:

- **Reading Level Analysis**: Detects complex sentence structures
- **Heading Validation**: Ensures headings are descriptive and meaningful
- **Link Purpose Clarity**: Verifies link text communicates destination
- **Abbreviation Handling**: Checks for proper acronym expansion

### Why AI for These Specific WCAG Guidelines?

Through research and evaluation, we discovered that **axe-core has significant limitations** in analyzing certain WCAG compliance areas, particularly those requiring semantic understanding and context-aware evaluation:

- **axe-core's Constraints**: While axe-core excels at detecting programmatic accessibility issues (ARIA, keyboard navigation, color contrast), it cannot understand content semantics or evaluate text complexity
- **Manual Testing Gaps**: The WCAG guidelines focused in this project (3.1.5, 2.4.10, 2.4.9, 3.1.4) typically require manual review or specialized domain knowledge
- **AI as a Solution**: By leveraging large language models with carefully crafted prompts, we can automate intelligent analysis of:
  - Sentence complexity and reading level (3.1.5)
  - Heading meaningfulness in context (2.4.10)
  - Link purpose clarity (2.4.9)
  - Acronym and abbreviation explanations (3.1.4)

This approach demonstrates a **Shift Left + AI** philosophy—catching semantic and content-based accessibility issues earlier in the development cycle by combining automated tooling with artificial intelligence.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## Future Enhancements

- [ ] Additional WCAG guideline coverage
- [ ] Multi-language support beyond Thai
- [ ] Integration with more AI providers
- [ ] Automated fix suggestions
- [ ] Performance metrics for accessibility scans

## License

MIT License © 2026 Somsak Arnon

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [axe-core](https://github.com/dequelabs/axe-core) for accessibility testing
- [Cypress](https://www.cypress.io/) for end-to-end testing
- [OpenRouter](https://openrouter.ai/) and [Google Gemini](https://ai.google.dev/) for AI capabilities
- [Vite](https://vitejs.dev/) for the build tooling</content>
<parameter name="filePath">/Users/somsak.arnon/Documents/_Playground/shift-left-plus-ai/README.md