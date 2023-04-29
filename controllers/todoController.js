import {Todo} from "../models/index.js";

export const getAllTodoTasks = (req, res) => {
    Todo.findAll()
    .then(todo => {
        res.send(todo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving todo."
        });
    });
}

export const createTodoTask = (req, res) => {
    Todo.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }).then(todo => {
        res.send(todo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating todo."
        });
    })
}

export const getTodoTask = (req, res) => {
    const id = req.params.id;
    Todo.findByPk(id)
    .then(todo => {
        res.send(todo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving todo."
        });
    });
}

export const deleteTodoTask = (req, res) => {
    const id = req.params.id;
    Todo.destroy({
        where: {id: id}
    }).then(todo => {
        res.send(todo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting todo."
        });
    });
}

export const updateTodoTask = (req, res) => {
    const id = req.params.id;
    Todo.update({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }, {
        where: {id: id}
    }).then(todo => {
        res.send(todo);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating todo."
        });
    });
}



