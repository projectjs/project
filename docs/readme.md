# Project JS

Project management for Web Application.

### Your Project

Project JS helps you from starting a new project, all the way to deploying your application. By using best-practices and conventions, you don't need to reinvent the wheel each time you start or update a project.

### Features

Project JS takes care of the following project lifecycle events:

##### Creating a new Web Application project

-   You decide which frameworks to use:

    -   Angular
    -   Ember
    -   Less
    -   Sass
    -   Karma
    -   Jasmine
    -   Mocha
    -   ...

-   You decide which languages to use:
    -   ES5
    -   ES6/ES2015
    -   TypeScript
    -   CoffeeScript
    -   ...

##### Generating Components in a Web Application project

-   Generate components using the best practices of the frameworks being used
-   Support any number of component types, made available by selecting the different frameworks in use by the project

##### Running a Web Application project

-   Start serving the project resources, including auto-reload on changes
-   Proxy support for paths not in the root of the server, such as API servers and assets
-   Ensuring as much compatibility with the production environment as possible

##### Testing a Web Application project

-   Running unit tests
-   Watching code and running unit tests
-   Ensuring unit tests run on the CI and can fail the build

##### Building a Web Application project

-   Bundling source code and resources
-   Ensuring minimum duplication, by separating reusable and third party components into their own bundle file
-   Optimizing source code and assets, such as minifying sources and other textual assets
-   Embedding environment-specific configuration into the generated build outputs

##### Managing Dependencies for a Web Application project

-   Add third party Dependencies
-   Remove third party dependencies
-   Automatically update loader configuration with added/removed dependencies, such as updating the SystemJS configuration

##### Managing multiple module Web Application

-   Add module
-   Remove module
-   Manage inter-module dependencies, including build and bundling order

##### Updating a Web Application

-   Add/Remove support for almost any feature during the lifetime of a project, including updating the project to support the new feature
-   Reinitialize a project, to update the project to the selected feature set, after making manual changes or using different tools

### Project JS Extensibility

Project JS is built from the ground up to support extensibility. In fact, even the core features mentioned above build on the extensibility layer of the Project JS, to enable supporting many different configurations and best-practices.

Using the numerous extensibility hooks, a Project JS Extension can add support for any feature to any part of the project management lifecycle.

When selecting a framework, a framework extension is added to the project, which will add hooks for most project lifecycle events, such as:

-   Create - Create the folder structure best suited for the specific framework
-   Generate - Create components based on templates that use the best practices of the specific framework
-   Test - Create the test configuration best suited for the specific framework

Other extensions will add their own hooks, and in some cases multiple extensions will add the same hooks in order ensure that the result uses the best possible best-practices for that lifecycle event.

### What it isn't

The focus of Project JS are Web Application projects, that would like to use the best tools available, and the best practices accepted by users of these tools, without having to continuously be involved in configuring and syncing the different tools.

Project JS does not try to solve any issues with creating NodeJS/NPM modules. While languages other than JavaScript that compile to JavaScript are supported, Project JS is not trying to replace project management features already available in those languages.

### Prior Art

In the world of Web Applications, both the Ember project and the Angular2 project provide a CLI tool for project management. Similarly, other environments and IDEs have support for projects and solutions, such as Visual Studio and IntelliJ IDEA.

Project JS attempts to take the best features from each of these existing tools, and make it just as easy to use, while being open and extensible enough to support any editor, and as many frameworks as possible.
