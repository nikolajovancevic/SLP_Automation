Feature: Claim/Buy products

	Background: User on e-courses page
		Given I am on e-courses page

	Scenario: Claim free product 
		When I click on any free e-course
		Then I click "Claim E-course" button
		Then I should see "Purchase completed." message

	Scenario: Claim free product by hovering over it 
		When I hover over the product
		Then I should see pop-up window
		Then I click "Claim product" button
		Then I should see "Purchase complete." message
		

