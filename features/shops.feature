Feature: Shops 
	
	Background: User on shops page
		Given I am on shops page

	Scenario: Subscribe to a shop
		When I click on "All About Crypto" shop
		Then I am relocated to shops page
		Then I enter my email into "Your email address" field
		Then I click "Subscribe" button 						

	
