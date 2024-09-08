Feature: Verify add to cart functionality

    Scenario: Verify add to cart functionality for carrot
        Given Navigate to Web Page
        When Type ca in search box click and click button
        And Select carrot and add to cart
        And Proceed to Check out
        Then Validate checkout page