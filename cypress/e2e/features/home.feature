Feature: Home Page Component
  Background:
    Given I visit the home page

  Scenario: Display vague section headings (WCAG 2.4.10)
    Then I should see a heading "ส่วนที่ 1"
    And I should see a subheading "ข้อมูลเพิ่มเติม"
    And I should see a card heading "เรื่องต่างๆ 1"

  Scenario: Display complex reading level text (WCAG 3.1.5)
    Then I should see text "ซึ่งถูกออกแบบมาเพื่อผู้ใช้งานที่ต้องการประสิทธิภาพอันสูงสุด"

  Scenario: Display abbreviations without full text (WCAG 3.1.4)
    Then I should see text "ทาง ครม. ได้มีมติให้ กทม. ดำเนินการตาม พ.ร.บ."

  Scenario: Display vague link text (WCAG 2.4.9)
    Then I should see a button with text "คลิกที่นี่"
    And I should see a button with text "อ่านรายละเอียดเพิ่มเติม"

  Scenario: Verify accessibility with AI Brain
    Then I ask the brain to verify accessibility for "#home-page" and expect "PASS"

