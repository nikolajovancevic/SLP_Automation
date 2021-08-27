#Different ways of buying products 

Feature: Claim/Buy products

	Background: User on e-courses page
		Given I am logged in as user
		Given I am on e-courses page

	#Claiming any free product available
	Scenario: Claim free product 
		When I click on any free e-course
		Then I click "Claim E-course" button
		Then I should see "Purchase completed." message
		Then I logout

	#Claiming any free product available by hovering over it 
	#"Claim product" step is contained withing buy_product_visitor.feature file
	Scenario: Claim free product by hovering over it 
		When I hover over the product and claim it
		Then I should see "Purchase complete." message 
		

