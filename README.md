<<<<<<< HEAD
Automation Tests for SLP

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
	
=======
Adding new json file.
>>>>>>> 5af3da46ed95857a2e938654e39b1ee7e757d3da
