Feature: Contact Us Component
  Background:
    Given I visit the home page
    And I click the navigation link "ติดต่อเรา"

  Scenario: Display vague heading
    Then I should see a heading "ข้อมูล 1"

  Scenario: Display multiple abbreviations
    Then I should see text "สนง.ใหญ่"
    And I should see text "กฟผ."
    And I should see text "BTS"

  Scenario: Navigate using vague link
    When I click the button with text "กดตรงนี้"
    Then the page title should contain "หน้าแรก"

  Scenario: Verify accessibility with AI Brain
    Then I ask the brain to verify accessibility for "#contact-page" and expect "PASS"

