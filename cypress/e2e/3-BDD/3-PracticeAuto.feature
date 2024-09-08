Feature: Want to test Automation Practice Login Page

    Background: Navigate to webpage
        Given Navigate to Login page

    # Scenario 1
    Scenario: Verify Login page for valid data
        # Given is written above
        When Enter login uid and pw
        And Click on login Button
        Then Verify login page

    # Scenario 2
    Scenario Outline: Verify login page for multiple data
        #Given is written above
        When Enter login <useremail> and <pswrd>
        And Click on login Button
        Then Verify login page <useremail>

        Examples:
            | useremail                    | pswrd      |
            | productionTest1995@gmail.com | sonal@1995 |
            | stageTest345@gmail.com       | sonal@345  |

    # Scenario 3
    Scenario Outline: Verify login page for multiple data
        # Given I navigate to login page
        When Enter login <useremail> and <pswrd>
        And Click on login Button
        Then Verify login page <useremail>

        Examples:
            | useremail                    | pswrd      |
            | productionTest1995@gmail.com | sonal@1995 |
            | stageTest345@gmail.com       | sonal@345  |