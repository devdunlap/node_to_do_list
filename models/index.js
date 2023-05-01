import  Sequelize  from "sequelize"
import { sequelize } from '../db/index.js';

export const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    
    title: {
        type: Sequelize.STRING,
        allowNull: false

    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

    



