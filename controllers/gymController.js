import {Gym} from "../models/index.js";

export const getAllGymTasks = (req, res) => {
    Gym.findAll()
    .then(gym => {
        res.send(gym);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving gym."
        });
    });
}

export const createGymTask = (req, res) => {
    Gym.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }).then(gym => {
        res.send(gym);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating gym."
        });
    })
}

export const getGymTask = (req, res) => {
    const id = req.params.id;
    Gym.findByPk(id)
    .then(gym => {
        res.send(gym);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving gym."
        });
    });
}

export const deleteGymTask = (req, res) => {
    const id = req.params.id;
    Gym.destroy({
        where: {id: id}
    }).then(gym => {
        res.send(gym);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting gym."
        });
    });
}

export const updateGymTask = (req, res) => {
    const id = req.params.id;
    Gym.update({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }, {
        where: {id: id}
    }).then(gym => {
        res.send(gym);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating gym."
        });
    });
}



