# Task Manager API 
This API perform CRUD operations to manage task manager. 

This application is running on port 3000

### Steps to run the application:
1. Run `npm install` command on the root of the application
2. Run `npm run start` command to start the application. `npm run start:watch` to run in *watch* mode.


## Get all Tasks
This endpoint fetch all the tasks stored in the in-memory storage.

**GET**: `/tasks`

**Response**: 
```
[
    {
        "title": "Create a new project",
        "description": "Create a new project using Magic",
        "completed": false,
        "id": 1
    }
]
```

## Get a Task by task id
This endpoint fetch a task using its ID.

**GET**: `/tasks/1`

**Response**: 
```
{
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false,
    "id": 1
}
```

## Create a Task
This endpoint create a task.

**POST**: `/tasks`

**Request**: 
```
{
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false
}
```

**Response**: 
```
{
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false,
    "id": 1
}
```

## Update a Task
This endpoint update a task using it ID.

**PUT**: `/tasks/1`

**Request**: 
```
{
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false
}
```

**Response**: 
```
{
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false,
    "id": 1
}
```

## Delete a Task
This endpoint delete a task using it ID.

**DELETE**: `/tasks/1`

**Response**: 
```
{
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false,
    "id": 1
}
```