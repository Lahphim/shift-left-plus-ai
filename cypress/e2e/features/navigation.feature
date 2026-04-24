Feature: Navigation Component
  Scenario: Display the navigation bar
    Given I visit the home page
    Then I should see the navigation bar
    And the logo should be "A11y FAIL SPA"
    And I should see 3 navigation links
    And the links should be "หน้าแรก", "เกี่ยวกับเรา", "ติดต่อเรา"

  Scenario: Navigate between pages without reload
    Given I visit the home page
    When I click the navigation link "เกี่ยวกับเรา"
    Then the page title should contain "เกี่ยวกับเรา"
    When I click the navigation link "ติดต่อเรา"
    Then the page title should contain "ติดต่อเรา"
    When I click the navigation link "หน้าแรก"
    Then the page title should contain "หน้าแรก"

  Scenario: Verify accessibility with AI Brain
    Given I visit the home page
    Then I ask the brain to verify accessibility for "#main-navigation" and expect "PASS"

