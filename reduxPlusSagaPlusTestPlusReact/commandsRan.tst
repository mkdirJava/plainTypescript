To install Jest on a Typescript project
npm i jest @types/jest ts-jest -D
Explanation:

    Install jest framework (jest)
    Install the types for jest (@types/jest)
    Install the TypeScript preprocessor for jest (ts-jest) which allows jest to transpile TypeScript on the fly and have source-map support built in.
    Save all of these to your dev dependencies (testing is almost always a npm dev-dependency)
https://basarat.gitbooks.io/typescript/docs/testing/jest.html

To install Karama more info look to 
http://karma-runner.github.io/4.0/config/configuration-file.html

# Install Karma:
$ npm install karma --save-dev

# Install plugins that your project needs:
$ npm install karma-jasmine karma-chrome-launcher karma-firefox-launcher  jasmine-core --save-dev



This is for Cypress io

npm install cypress --save-dev @cypress/webpack-preprocessor typescript ts-loader webpack
# If this is from a blank project 
npm install cypress webpack @cypress/webpack-preprocessor typescript ts-loader


This is to add in React
npm install react react-dom --save
This is to install webpack
npm install webpack webpack-dev-server webpack-cli --save