const userService = require('../services/user.service');

const getAllUsers = async (req, res, next) => { //get
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(
            {
                status: 200,
                success: true,
                data: users,
                message: 'Lấy danh sách người dùng thành công',
            }
        );
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json({
            status: 200,
            success: true,
            data: user,
            message: 'Lấy thông tin người dùng thành công'
        });
    } catch (error) {
        next(error);
    }
};

const register = async (req, res, next) => { //post
    try {
        const newUser = await userService.register(req.body);
        res.status(201).json({
            status: 201,
            success: true,
            data: newUser,
            message: 'Đăng ký người dùng thành công'
        });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => { //put 
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json({
            status: 200,
            success: true,
            data: updatedUser,
            message: 'Cập nhật thông tin người dùng thành công'
        });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => { //delete
    try {
        await userService.deleteUser(req.params.id);
        res.status(200).json({
            status: 200,
            success: true,
            message: 'Xóa người dùng thành công'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    register,
    updateUser,
    deleteUser
};