// src/routes/user.routes.js
const express = require('express');
const router = express.Router(); // Lấy đối tượng Router từ Express
const userController = require('../controllers/user.controller'); // Import controller

// Định nghĩa các đường dẫn API cho người dùng:
// GET /api/users -> Gọi userController.getAllUsers
router.get('/', userController.getAllUsers);

// GET /api/users/:id -> Gọi userController.getUserById (với :id là tham số)
router.get('/:id', userController.getUserById);

// POST /api/users -> Gọi userController.createUser
router.post('/', userController.register);

// PUT /api/users/:id -> Gọi userController.updateUser
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id -> Gọi userController.deleteUser
router.delete('/:id', userController.deleteUser);

module.exports = router; // Xuất router để app.js có thể sử dụng