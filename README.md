
<h1>Automation Tests for SLP</h1>

	Repository contains tests regarding Sacret Life Platform (SLP)
	
	All test are executed in stage environment: 
	https://stage.sacret-life.com
 
	Google version 91.0.4472.164 (64-bit)

<h3>Programs required for being able to run tests in this repository:</h3>

#Node.js and npm, instalation:
 
	sudo apt update
 
 	sudo apt install nodejs npm

  Verify installation by executing following command:

	node --version 
	npm --version 

#WebdriverIO test runner, installation:
 
	npm install @wdio/cli  
	npm wdio config		/* prompts sets of questions that guides you trough setup
				  passing a '--yes' parameter will install with default op				    tions */

//helper module to run WebdriverIO commands synchronously 

#WebdriverIO Sync, instalation:

	npm -i @wdio/sync

  Running a test suit, execute:

	npx wdio run ./wdio.conf.js 

  Running a specific test, execute: 

	npx wdio run ./wdio.conf.js --spec example.js

#Visual Studio Code or any other source-code editor

In VSC Terminal (ctrl + ` ) enter following command to run tests: 

	npm run test	

#Faker.js - node.js library that allows user to generate fake data for projects, instalation: 

	npm i faker	


