#Tests regarding search bar 

Feature: Search bar
	
	#Performing a search without entering any charater in the search box 
	Scenario: Perform a search without input 
		Given I am on SLP home page
		When I click search button
		Then I should see message "Search phrase must be at least three characters long"


