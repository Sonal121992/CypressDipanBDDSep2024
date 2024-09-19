Feature: verify new user sinup for automation exercise page

    Scenario Outline: verify for new user
        Given I navigate to signup page <index> and enter for new user signup and click on signup button
        When  I fill the data on enter account information page and click on create account button
        And I validate account is created
        Then I verify for login to your account for same user

        Examples:
            | index |
            | 0     |