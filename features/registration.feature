 #Registration feature

Feature: Registration

	#Registering a new user, using valid data
	Scenario: Successfully register as a new user
		Given I am on registration page
		Then I register with registration data
		Then I should see message "Please check your email for account verification"
		Then I open mail recieved from SLP 
		When I click on "Verify account" button 
		Then I am redirected to SLP and see message "Email is verified"
