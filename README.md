
<h1>Automation Tests for SLP</h1>

Programs required for being able to run tests in this repository:

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

#WebdriverIO Sync, instalation:  //helper module to run WebdriverIO commands synchronously 
	npm -i @wdio/sync

  Running a test suit, execute:
	npx wdio run ./wdio.conf.js

  Running a specific test, execute:
	npx wdio run ./wdio.conf.js --spec example.js

#Visual Studio Code or any other source-code editoru

In VSC Terminal (ctrl + `) enter following command to run tests:
	npm run test	

#Faker.js - node.js library that allows user to generate fake data for projects, instalation:
	npm i faker	
=======

