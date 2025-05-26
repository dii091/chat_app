require('dotenv').config(); // Load biến môi trường

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false, // Tắt log SQL để console sạch hơn, bật lên để debug
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Kiểm tra kết nối
async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Kết nối MySQL thành công!');
    } catch (error) {
        console.error('Không thể kết nối đến MySQL:', error);
        process.exit(1); // Thoát ứng dụng nếu không thể kết nối DB
    }
}

module.exports = { sequelize, connectDB };