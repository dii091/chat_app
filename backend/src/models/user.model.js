const {DataTypes, Model} = require('sequelize');
const database = require('../configs/database'); // Đường dẫn đến file cấu hình kết nối database

const User = database.sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING(64), // Giả sử mã hóa password bằng bcrypt, nên giới hạn độ dài
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: true, 
    underscored: true,
})

module.exports = User;