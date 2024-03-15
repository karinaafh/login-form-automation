# Part 1 :  Setup and build automation
1. Install all necessery tools :
● Appium Server GUI
● Appium Inspector
● NodeJS
● WebdriverIO
● Android Studio 

2. Initiate project inside creativedock directory by running this command:
npm init -y

3. Install Dependencies
Install Appium, WebdriverIO CLI, and Allure CLI dependencies with this command:
npm install @wdio/cli allure-commandline --save-dev

4. Configure Test Setup
Run this command : npx wdio config
With the command above, a wizard will be executed, configure the test setup so that it’ll
- be launched locally
- have automation backend located locally
- run using the mocha framework
- run without compiler
- use autogenerated page objects and test files
- use test reporter spec and allure
- use wait-for plugin
- use chromedriver service

5. Setup Service and Capabilities for Appium
Add capabilities configuration to wdio.conf.js file

6. Configure Test Report in wdio.conf.js file

7. Setup Test Execution Script in package.json file

# Part 2 : Clone and run the automation
1. Clone the repository
2. Add .env file inside the creativedock directory
3. Run "npm install" to install all necessary dependencies
4. Run "npm run test" to run the Login Form automation
5. Report will be generated inside allure-results folder, it is in json format