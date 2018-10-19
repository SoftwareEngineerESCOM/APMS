# Academic Program Managament System

Front-End Application 

## Commands to keep structure:

### Create Angular 7 Project

`ng new {projectName} --style=scss --routing`

### Create Module

`ng g m {moduleName} --routing`

### Create Component

`ng g c {moduleName}/components/{componentName} --module {moduleName}`

### Create Interface

`ng g i {interfaceName}/interfaces/{interfaceName}`

### Create Service

`ng g s {moduleName}/services/{serviceName}`

### Create Directive

`ng g d {moduleName}/directives/{directiveName}`

### Create Guard

`ng g g {moduleName}/guards/{guardName}`

By Convention we will add Guards to the `Auth` module.

### Start Development Server

`ng serve --watch`

### Build for production

`ng build --prod --build-optimizer --output-path public --base-href https://SoftwareEngineerESCOM.gitlab.io/APMS/`

