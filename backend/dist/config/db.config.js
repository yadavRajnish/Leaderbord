"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "leaderbord",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
