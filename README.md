# Full-Stack(MERN) Website - Movie and subscription management system




Full-Stack(MERN) Website.

Movie and subscription management system.



Client: Developed by React JS with several libraries like (Axios) for making calls to servers,
(React Router Dom) which I used to route the displayed pages by URL. The site is divided into certain pages and functions that require user permissions, each user has a unique list of permissions that gives him access to pages and functions on the site.


Server: Two servers were developed using Node JS and Express.
The communication between the server and the client is done by Rest (CRUD).
The servers manage databases implemented by Mongo DB and object model by Mongoose.
(The servers read and write files that are also used to store data.)
The server is also responsible for authenticating the user by JWT that creates a Token key when the user enters the site and then re-authenticates every time a request is sent by the client to enter an area with restricted access.


- The data base has the following initial data:
- 1 Admin with all the permission.









The app uses a number of open source projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [VScode-Editor] - awesome web-based text editor.
- [redux] - a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments.
- [NodeJS] - an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without.
- [Express] - a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
- [MongoDB] - a document-based NoSQL database that stores data in BSON (JSON-like) format.
- [Mongoose] -  a Node. js-based Object Data Modeling (ODM) library for MongoDB. It is akin to an Object Relational Mapper (ORM) such as SQLAlchemy for traditional SQL databases. 
- [JWT] - (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.






## Installation


Install the dependencies and devDependencies and start the client.

```sh
cd MERN-PROJECT
cd client
npm i
npm start
```


Install the dependencies and devDependencies and start the first server.

```sh
cd MERN-PROJECT
cd server
cd cinemaWS
npm i
npm start
```
Install the dependencies and devDependencies and start the secend server.

```sh
cd MERN-PROJECT
cd server
cd subscriptionsWS
npm i
npm start
```



   [redux]: <https://redux.js.org/>
   [VScode-Editor]: <https://code.visualstudio.com/>
   [ReactJS]: <https://react.dev/>

   [NodeJS]: <https://nodejs.org/>
   [Express]: <https://expressjs.com/>
   [MongoDB]: <https://www.mongodb.com//>
   [Mongoose]: <https://mongoosejs.com/>
   [JWT]: <https://jwt.io//>


   
