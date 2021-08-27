#As a visitor

Feature: Buying product as a visitor
	
	#Trying to purchase any product as a visitor, non-registered user
	Scenario: Buy a product from all events
		Then I select event
		Then I should be relocated to SLP registration page
