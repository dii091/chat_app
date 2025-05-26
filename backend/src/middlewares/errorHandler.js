// src/middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
    // In lỗi chi tiết ra console server để debug
    console.error('Lỗi server:', err.stack);

    // Xác định mã trạng thái HTTP (status code) và thông báo lỗi
    // Mặc định là 500 Internal Server Error nếu không có mã lỗi tùy chỉnh
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Có lỗi xảy ra trên server';

    // Gửi phản hồi lỗi về client
    res.status(statusCode).json({
        success: false,
        message: message,
        error: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
};

module.exports = errorHandler;