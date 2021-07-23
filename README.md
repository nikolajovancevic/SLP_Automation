
<h1>Automation Tests for SLP</h1>

	Repository contains tests regarding Sacret Life Platform (SLP)
	
	All test are executed in stage environment: 
	https://stage.sacret-life.com
 
	Google version 91.0.4472.164 (64-bit)

<h3>Programs required for being able to run tests in this repository:</h3>

#Node.js and npm, instalation: /n
	sudo apt update /n
 	sudo apt install nodejs npm

  Verify installation by executing following command: /n
	node --version /n
	npm --version 

#WebdriverIO test runner, installation: /n
	npm install @wdio/cli  /n
	npm wdio config	/n	/* prompts sets of questions that guides you trough setup
				  passing a '--yes' parameter will install with default op				    tions */

//helper module to run WebdriverIO commands synchronously /n
#WebdriverIO Sync, instalation: /n 
	npm -i @wdio/sync

  Running a test suit, execute:
	npx wdio run ./wdio.conf.js /n

  Running a specific test, execute: /n
	npx wdio run ./wdio.conf.js --spec example.js

#Visual Studio Code or any other source-code editor

In VSC Terminal (ctrl + ` ) enter following command to run tests: /n
	npm run test	

#Faker.js - node.js library that allows user to generate fake data for projects, instalation: /n
	npm i faker	


