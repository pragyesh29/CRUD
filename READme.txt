PROJECT STRUCTURE
MVC is a application design pattern that seperates the Application data and Buisness logic from the Presentation. It stands for model View Controlle. The controller mediates b/w the model and view. Hence we need to create seperate folders for model, view and controller. In this project we are following MVC pattern of application, we will create few folders inside server folder.

assests - Here all the assets of our Project resides. Example JS, CSS, Image files.
    css - This will contain all the .css files
    js - This will contain all the .js files
    img - This will contain all the .img, .jpg, .jpeg or sort of image file. Though, no image is used in this project.

views - Here all the html files will reside. We will we using Embedded Javascript Template Engine to create Dynamic HTML. This is the default folder of the view engine of express.

server - Here all the server side code will reside like services, model, database connection.
    controller - This will deal with user request for resources from the server. Controller with contain different functions that will send resources to the user.
    model - Here we will work with mongodb data, we will perform data validation, processing data, creating mongo scheme like operations.
    database - For database.
    routes - Contain different routes
    services - 