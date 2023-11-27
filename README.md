# node-basic
Application Overview:

**Simple project create a api for note create and retrive the note**

Any web app needs to persist data somehow, and relational databases are always a good option for any web app.

In these simple project, I use  **mysql2** ,  **ESModules** , and  **async/await**

In this Simple project create a api for note
<hr/>

1. METHOD : POST

URI : [http://localhost:8080/notes](http://localhost:8080/notes)

BODY: {

    "title":"new test from postman",

    "contents":"test i love javascript"

}

2.METHOD : GET

URI :[http://localhost:8080/notes](http://localhost:8080/notes)

Get all the data

3.METHOD: GET

URI:[http://localhost:8080/notes/{ID}](http://localhost:8080/notes/%7BID%7D)

Get specific data by passing id as a parameter
