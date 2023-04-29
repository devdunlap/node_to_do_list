import  Sequelize  from "sequelize"
import { sequelize } from '../db/index.js';

export const Todo = sequelize.define('todo', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    }
});


