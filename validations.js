const { validationResult } = require('express-validator');

const checkStrictBoolean = function(value) {
    if (typeof value != 'boolean') {
      throw new Error('Invalid boolean value');
    }

    return true;
};

const createTaskSchema = {
    title: { notEmpty: true,  },
    description: { notEmpty: true },
    completed: { isBoolean: { strict: true }, custom: { options: checkStrictBoolean } }
};

const getTaskByIdSchema = {
    id: { notEmpty: true, isNumeric: true }
};

const updateTaskSchema = {
    id: { notEmpty: true, isNumeric: true, in: ['params']},
    title: { optional: true, in: ['body'] },
    description: { optional: true, in: ['body']  },
    completed: { optional: true, isBoolean: { strict: true }, custom: { options: checkStrictBoolean }, in: ['body'] }
};

const deleteTaskSchema = {
    id: { notEmpty: true, isNumeric: true, in: ['params']}
};

const validate = (request, response, next) => {    
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.mapped() })
    }
    else {
        next();
    }
};

module.exports = {
    createTaskSchema,
    getTaskByIdSchema,
    updateTaskSchema,
    deleteTaskSchema,
    validate
}