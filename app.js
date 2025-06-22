const express = require('express');

const app = express();
const port = 3000;

const { checkSchema } = require('express-validator');

const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('./task');
const { createTaskSchema, getTaskByIdSchema, updateTaskSchema, deleteTaskSchema, validate } = require('./validations');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/tasks', getAllTasks);

app.get('/tasks/:id', checkSchema(getTaskByIdSchema, ['params']), validate, getTaskById);

app.post('/tasks', checkSchema(createTaskSchema, ['body']), validate, createTask);

app.put('/tasks/:id', checkSchema(updateTaskSchema), validate, updateTask);

app.delete('/tasks/:id', checkSchema(deleteTaskSchema), validate, deleteTask);


app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;