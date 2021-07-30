#Tests regarding login feature 

Feature: Login 

	#Logging in as registered user
	Scenario: Login successfully as user
			Given I am on the login page
			When I login with username and password
			Then I should be logged in

	
