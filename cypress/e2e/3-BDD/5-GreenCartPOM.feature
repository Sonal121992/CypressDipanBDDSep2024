Feature: Verify green cart web page using POM

  Scenario Outline: Verify add to cart functionality for multiple products using POM
    Given Navigate to we page green cart POM
    When Type <SearchBxIp> in search box click POM
    And Select <products> and add to cart POM
    And Proceed to checkout <products> POM
    Then Validate checkout page POM

    Examples:
      | SearchBxIp | products                |
      | al         | Almonds,Walnuts         |
      | ma         | Mango                   |
      | ca         | Cashews,Carrot,Capsicum |


