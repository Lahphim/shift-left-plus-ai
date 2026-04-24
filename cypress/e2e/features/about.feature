Feature: About Us Component
  Background:
    Given I visit the home page
    And I click the navigation link "เกี่ยวกับเรา"

  Scenario: Display vague section headings
    Then I should see a heading "หัวข้อ 2"
    And I should see a subheading "ส่วนเสริม"

  Scenario: Display abbreviations without explanations
    Then I should see text "สสส."
    And I should see text "ททท."

  Scenario: Navigate using vague link
    When I click the button with text "กลับหน้าหลัก"
    Then the page title should contain "หน้าแรก"

  Scenario: Verify accessibility with AI Brain
    Then I ask the brain to verify accessibility for "#about-page" and expect "PASS"

