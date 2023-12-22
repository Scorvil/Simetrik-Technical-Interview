Feature: Order History

Scenario: As a user with order history, I must be able to see a button in the navbar to check my order history
    Given I am a user with order history
    When I log in with my credentials
    Then I expect "order history button" to be "displayed" on "homepage"

Scenario: As a user with no orders made, I must be able to see a button in the navbar to check my order history
    Given I am a user with no orders made
    When I log in with my credentials
    Then I expect "order history button" to be "displayed" on "homepage"

Scenario: As a user with order history, I must be able to see the list of all my orders and their details
    Given I am a user with order history
    When I log in with my credentials
    And I click on "order history button" on "homepage"
    Then I expect "order list" to be "displayed" on "order history page"
    And I expect each order to contain its details

Scenario: As a user with no orders made, I must see a message indicating that my order history is empty
    Given I am a user with no orders made
    When I log in with my credentials
    And I click on "order history button" on "homepage"
    Then I expect "empty order history message" to be "displayed" on "order history page"

Scenario: As a user with order history, I must be able to click on any order to check its details
    Given I am a user with order history
    When I log in with my credentials
    And I click on "order history button" on "homepage"
    And I click on any order from order history
    Then I expect "order number" to be "displayed" on "order details page"
    And I expect "order date" to be "displayed" on "order details page"
    And I expect "order status" to be "displayed" on "order details page"
    And I expect "product list" to be "displayed" on "order details page"

Scenario: As a user with order history, I must be able to see the details of each product of the product list
    Given I am a user with order history
    When I log in with my credentials
    And I click on "order history button" on "homepage"
    And I click on any order from order history
    Then I expect "product list" to be "displayed" on "order details page"
    And I expect each product to contain its details