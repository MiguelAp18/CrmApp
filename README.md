## About The Project
<p>This application has the objective to create users and tickets to relate them and then perform CRUD operations. The app was developed using Django, MySQL and React</p>

## Installation
First, you need to download the project and install or simply clone it.

# Backend Setup

Enter to the backend dir using a Terminal and type the next command to create the virtual environment:
```
python -m virtualenv env
```

To run the virtual environment:
```
.\venv\Scripts\activate
```

## Setting up the DB
To connect the database, you need to create a new database in MySQL using your username and password. Then you need to create your own environment variables using dotenv and check the database is up and running

## Execute backend in dev environment
Once the database is connected the only remaining step is to run the following file in your terminal:
```
manage.py
```

# Frontend Setup

Enter to the frontend dir and then install all the npm modules using the following command:
```
npm install
```

## Execute frontend in dev environment
Once all the modules are installed run the following command in your terminal:
```
npm run dev
```
