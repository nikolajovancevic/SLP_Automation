Feature: Buying an event 

	Background: User on e-courses page
		Given I am logged in as user
		Given I am on all events page

	#Claiming any free product available
	Scenario: Claim free product 
		When I click on any free event
		Then I click "Claim product" button
		Then I should see "Purchase completed." message
		