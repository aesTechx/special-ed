[![Stories in Ready](https://badge.waffle.io/aesTechx/special-ed.png?label=ready&title=Ready)](https://waffle.io/aesTechx/special-ed)
[Visit Page](http://special-ed.herokuapp.com/)

# Special Ed
A portal/app for helping those with learning disabilities and autism to connect to their facilitators and rehab centers, in a move to make it possible to learn from home and monitor progress
http://special-ed.herokuapp.com/

![alt tag](https://github.com/aesTechx/special-ed/blob/master/Screenshots/ext.jpeg)

## Special features

* Create user accounts
* A free assessment based on CARS psychological model
* A drag and drop game to improve cognitive behaviour
* User, Center, and Teacher/Specialist profiles
* Stats preview for assessment results
* Email connectivity with center/teacher/student
* Map view of registered centers

## General Use
* Visit homepage and check the various features of assessments, games, and centers
* Visit the portal from the home page and signup for an account
* Once your account is created you can visit your profile and more details
* You can choose a center at signup or apply to one that you like afterwards
* Once you are part of a center, you can view teachers/center profiles
* Play game
* Take free assessment again to update your stats

### Test user
* Type of User: Student
* Username:     Amir
* Password:     123

## Meet The Engineers
* Product Owner: Eshraq Bakri
* Scrum Master: Salah Alomari
* Development Engineer: Aws Ahmed

## Database
This project uses Mongo DB, therefore, mongo must be installed on your PC, follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) for OS

### Schema mockup
![alt tag](https://github.com/aesTechx/special-ed/blob/master/schemaFinalProject.png)

## Start the app
After cloning the project into your local do from the root repository
* ```sudo npm install -g bower ```
* ```npm install```   - to install dependancies
* ```mongod```    - to start the database
* ```npm start```   - to start the project and access the portal on local host

## Linting
* Eslint used for linting based on hackreactor styling guide
To run the lint file do:
* ```npm run lint```

## Testing
* Frontend:    ```gulp karma```
* Backend:   ```gulp test```

## Dependancies
### Server Side
* Express 4.13.4
* Forever 0.10.11
* Bcrypt-nodejs 0.0.3
* Bluebird 1.0.8
* CORS 2.7.1
* Body-parser 1.5.2
* Jwt-simple 0.2.0
* Mongoose 4.1.0
* Morgan 1.7.0
* nodemailer 2.5.0
* nodemailer-smtp-transport 2.6.0
* Q 1.4.1
* Request 2.69.0
* Socket.io 1.4.5
* Underscore 1.8.3
* Morgan 1.7.0

### Client Side
* Angularjs 1.4.3
* Angular-route latest
* Angular-touch latest
* Angular-resource latest
* Angular-bootsrtap 2.0.1
* JSON3 3.3.0
* es5-shim 4.0.0
* Bootstrap 3.2.0
* ui-Router latest
* Bootstrap-btn-outline-rounded 0.0.3
* Angular-animate latest
* Components-font-awesome 4.3.0
* Angular-snap latest
* Underscore 1.8.3

### Testing suits
#### Front End
* Karma
* Jasmine
* PhantomJS

#### Backend
* Mocha
* Chai

## Contributing
To contribute to this project please visit our [Contributing.md] (https://github.com/aesTechx/special-ed/blob/master/CONTRIBUTING.md)

## Folder Hierarchy

```
special-ed
├── app  // Database configuration
│   ├── controllers
│   │   ├── assessmentController.js // Controls assessment saving and retrieval from database
│   │   ├── centerController.js // Controls center schema for authentication, retrieval, parsing in database, etc
│   │   ├── gameController.js // Controls game records for users
│   │   ├── recordController.js // Controls records schema for storing assessment results
│   │   ├── specialistController.js // Controls specialist schema (similar to center schema)
│   │   └── studentController.js // similar to specialist and center controllers
│   └── models // Schemas
│       ├── assessment.js
│       ├── center.js
│       ├── game.js
│       ├── record.js
│       ├── specialist.js
│       └── student.js
├── assets
│   └── carsAssessmentQuestions.js
├── config
│   ├── helpers.js //helper functions
│   ├── middleware.js //Express middleware functions for piping
│   ├── routes.js //handle requests and responses and route them inside backend
│   └── socket.handler.js //handle socket.io configuration
├── frontend
│   ├── assets //Assets for picGame
│   │   └── ...
│   ├── fonts
│   │   └── ...
│   ├── helpers
│   │   ├── liquidFillGauge.js //d3 function to control water gauges in student profiles
│   │   └── uploadToImgur.js //function to upload to imgur
│   ├── images //images used throughout application 
│   │   └── ...
│   ├── img //images used throughout application 
│   │   └── ...
│   ├── js
│   │   ├── app.js //angular module and controller to control html of game
│   │   └── game.js //function to handle game logic
│   ├── lib //Frontend dependancies
│   │   └── ...
│   ├── scripts
│   │   ├── controllers //Angular module controllers for corresponding views
│   │   │   ├── assessmentController.js //controls assessment
│   │   │   ├── centerProfile.js 
│   │   │   ├── centers.js // All centers map view
│   │   │   ├── dashboard.js //backbone of frontend
│   │   │   ├── game.js // controls dragAndDrop game
│   │   │   ├── landingController.js // Landing page controller
│   │   │   ├── login.js 
│   │   │   ├── overview.js // Overview page controller
│   │   │   ├── picGame.js 
│   │   │   ├── report.js // Disabled for now
│   │   │   ├── studentProfile.js 
│   │   │   ├── teacherProfile.js
│   │   │   └── signup.js
│   │   ├── services 
│   │   │   └── services.js //handle http communications with backend for all controllers
│   │   └── app.js //Main app module, http interceptors, and frontend state routing
│   ├── src //angular drag and drop dependancies
│   │   └── ...
│   ├── styles //CSS and .LESS styling libraries
│   │   └── ...
│   ├── views 
│   │   ├── dashboard // Member area dashboard views
│   │   │   ├── assessmentForm.html 
│   │   │   ├── centerProfile.html 
│   │   │   ├── centers.html 
│   │   │   ├── game.html //  dragAndDrop game
│   │   │   ├── games.html // Play zone
│   │   │   ├── memoryGame.html
│   │   │   ├── overview.html
│   │   │   ├── picGame.html 
│   │   │   ├── report.html 
│   │   │   ├── studentProfile.html 
│   │   │   └── teacherProfile.html
│   │   ├── guest // Public area
│   │   │   ├── freeAssessment.html 
│   │   │   ├── freeGame.html 
│   │   │   └── publicCenters.html 
│   │   ├── base.html
│   │   ├── dashboard.js 
│   │   ├── game.html
│   │   ├── landingPage.html
│   │   ├── login.html
│   │   └── signup.html
│   ├── 404.html // not found 404 page
│   ├── index.html //main app page
│   ├── menu.html //left snap drawer menu for inside navigation
│   └── favicon.ico //icon that appears on browser tab
├── spec // tests
├── emailComms.js // handle smtp email communications
.
.
.
├── .travis.yml // integration server configuration
├── karma.conf.js // karma testing configuration
├── package.json // handle dependancies
└── server.js // gateway of backend and express server configuration

```
