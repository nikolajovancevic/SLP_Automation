Feature: Users management

	Background: Logged in as Admin
		Given I am logged in to SLP as admin

	Scenario: Assign premium to a user
		When I click on "Assign premium (sl-club)"
		Then I click "Ok" button on pop-up box

