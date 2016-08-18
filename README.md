[![Stories in Ready](https://badge.waffle.io/aesTechx/special-ed.png?label=ready&title=Ready)](https://waffle.io/aesTechx/special-ed)
# Special Ed
A portal/app for helping those with learning disabilities and autism to connect to their facilitators and rehab centers, in a move to make it possible to learn from home and monitor progress

## Special features

* Create user accounts
* A free assessment based on CARS psychological model
* A drag and drop game to improve cognitive behaviour
* User, Center, and Teacher/Specialist profiles
* Stats preview for assessment results
* Email connectivity with center/teacher/student
* Map view of registered centers

## Meet The Engineers
Product Owner: Eshraq Bakri
Scrum Master: Salah Alomari
Development Engineer: Aws Ahmed

## Database
This project uses Mongo DB, therefore, mongo must be installed on your PC, follow the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) for OS

## Start the app
After cloning the project into your local do from the root repository
* ```sudo npm install -g bower ```
* npm install - to install dependancies
* mongod - to start the database
* npm start - to start the project and access the portal on local host

## Linting
* Eslint used for linting based on hackreactor styling guide
To run the lint file do:
* npm run lint

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

### Build script
Gulp

### Integration Server
Travis

## Contributing
To contribute to this project please visit our [Contributing.md] (https://github.com/aesTechx/special-ed/blob/master/CONTRIBUTING.md)
