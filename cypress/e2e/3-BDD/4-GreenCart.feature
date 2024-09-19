Feature: Verify add to cart functionality

    Scenario: Verify add to cart functionality for carrot
        Given Navigate to Web Page
        When Type ca in search box click and click button
        And Select carrot and add to cart
        And Proceed to Check out
        Then Validate checkout page

    Scenario Outline: Verify add to cart functionality for multiple products
        Given Navigate to Web Page
        When Type <SearchBox> in search box click on search box
        And Select <products> and add to cart
        And Proceed to checkout <products>
        Then Validate checkout page

        Examples:
            | SearchBox | products         |
            | al        | Almonds, Walnuts |
            | ma        | Mango            |
            | ca        | Cashews          |