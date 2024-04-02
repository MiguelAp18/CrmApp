## About The Project
<p>This application pretends to create users and tickets to relate them and then perform CRUD operations. The app was developed using Django and MySQL</p>

## Installation
First, you need to download the project and install or simply clone it.

Enter to the project dir using a Terminal and type the next command to create the virtual environment:
```
python -m virtualenv env
```

To run the virtual environment:
```
.\venv\Scripts\activate
```

## Setting up the DB
To connect the database, you need to create a new database in MySQL using your username and password. Then you need to create your own environment variables using dotenv and check the database is up and running

## Execute app in dev environment
Once the database is connected the only remaining step is to run the following command in your terminal:
```
.\src\app.py
```


### Notes:
You can work with this backend using a frontend with a framework like React or Angular, or you can use a service like Postman or Insomnia to simulate that functionality
