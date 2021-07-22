Feature: Join SLP Club
	
	Scenario: Apply for SLP Club membership
		Given I am on SLC page as user
		Then  I click on "Apply" button
		Then  I enter payment info and I choose master card
		When  I enter master card info and click "Pay" button
		Then  I should see message "Thank you for applying for subscription"		

