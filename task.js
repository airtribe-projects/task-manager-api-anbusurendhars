const { matchedData } = require('express-validator');

const tasks = [];

const getAllTasks = (request, response) => {
    return response.send(tasks);
};

const getTaskById = (request, response) => {
    try {
        const taskRequest = matchedData(request);
        const taskIndex = findTaskIndex(taskRequest);
        const task = tasks[taskIndex];

        return response.send(task);
    } catch (error) {
        console.log(error);
        
        if (error.name == 'NOT FOUND ERROR'){
            return response.status(404).send({ message: error.message });
        }

        return response.status(500).send({ message: 'Something went wrong' });
    }
};

const createTask = (request, response) => {
    try {
    const task = matchedData(request);
    task.id = tasks.length + 1;

    tasks.push(task);

    return response.status(201).send(task);
    } catch (error) {
        return response.status(500).send({ message: 'Something went wrong' });
    }
};

const updateTask = (request, response) => {
    try {
        const taskToUpdate = matchedData(request);

        const taskIndex = findTaskIndex(taskToUpdate);
        const task = {...tasks[taskIndex]};

        task.title = taskToUpdate.title;
        task.description = taskToUpdate.description;
        task.completed = taskToUpdate.completed;

        tasks[taskIndex] = task;

        return response.send(task);
    } catch (error) {
        if (error.name == 'NOT FOUND ERROR'){
            return response.status(404).send({ message: error.message });
        }
    }
};

const deleteTask = (request, response) => {
    try {
        const taskToUpdate = matchedData(request);

        const taskIndex = findTaskIndex(taskToUpdate);
        const task = {...tasks[taskIndex]};

        tasks.splice(taskIndex, 1);

        return response.send(task);
    } catch (error) {
        if (error.name == 'NOT FOUND ERROR'){
            return response.status(404).send({ message: error.message });
        }
    }
};

const findTaskIndex = (taskRequest) => {
    const taskId = parseInt(taskRequest.id);

    const taskIndex = tasks.findIndex(task=>task.id === taskId);

    if (taskIndex === -1){
        const error = new Error(`Task id: ${taskId} is not found`);
        error.name = 'NOT FOUND ERROR';
        throw error;
    }

    return taskIndex;
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};