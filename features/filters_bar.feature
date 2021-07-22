Feature: Filters bar

	Background: User is on all events page 
		Given I am on all events page

	Scenario: Filter products by price range
		When I click on "Price" option 
		Then I select price range "0-100"
		Then I click "Search" button 
		Then I should only see products in that price range
	

	Scenario: Filter product by date
		When I click on "Date" option
		Then I select "Past events"
		Then I should only see events before current date

	Scenario: Filter product by setting date range manually
		When I click on "Enter dates"
		Then I enter specific date range
		Then I should see product in that range
