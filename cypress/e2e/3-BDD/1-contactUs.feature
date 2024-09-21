Feature: I want to verify ContactUs page

    Scenario: Verify page for Valid Data
        Given Navigate to webpage
        When Enter the data to all fields
        And Click on the Submit Button
        Then Verify the validate message

@focus
    Scenario: Verify page for datatable
        Given Navigate to webpage
        When Enter the data from data table for all fields
            | fn    | ln     | email            | msg                      |
            | Ketan | Lambat | ketanl@gmail.com | I am fullstack developer |

        And Click on the Submit Button
        Then Verify the validate message