import {Sequlize} from 'sequelize';

export const sequelize = new Sequlize("to_do_list", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});