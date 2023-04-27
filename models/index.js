import  Sequelize  from "sequelize"
import { sequelize } from '../db/index.js';

export const Gym = sequelize.define('gym', {
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


