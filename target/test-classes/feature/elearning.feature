Feature: Elearning login page

  Background: Background selection
    Given User is on homepage

  Scenario Outline: Login with unauthorized user
    When user enter invalid Username "<username>" and password "<password>"
    When user click on Submit button
    When user enter valid credentials
    When user click on submit button
    When User enter valid Message "<message>"

    Examples: 
      | username   | password  | message   |
      | Aakash1306 | 123456789 | hi        |
      | jonse1234  | 123456789 | impartent |
      | vikkiy1234 | 123456789 | message   |
