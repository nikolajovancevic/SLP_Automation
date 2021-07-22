Feature: Buying product as a visitor
	
	Scenario: Buy a product from all events
		Given I am on all events page as visitor
		Then I select "I love cars and boats" event
		When I click "Claim product" button
		Then I should be relocated to SLP registration page
