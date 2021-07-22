Feature: Search bar
	
	Scenario: Searching without input 
		Given I am on SLP home page
		When I click search button
		Then I should see message "Search phrase must be at least three characters long"


