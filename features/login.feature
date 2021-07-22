Feature: Login 

	Scenario Outline: Login successfully as user
			Given I am on the login page
			When I login with username and password
			Then I should be logged in

	
