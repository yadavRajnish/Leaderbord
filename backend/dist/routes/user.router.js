"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.post('/add-user', user_controller_1.addUSer);
router.get('/get-all-users', user_controller_1.getAllUsers);
router.get('/get-user-by-id/:id', user_controller_1.getUserById);
exports.default = router;
