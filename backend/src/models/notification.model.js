// src/models/notification.model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/database');

const Notification = sequelize.define('Notification', {
    notification_id: {
        type: DataTypes.INTEGER, // <-- Đổi từ UUID sang INTEGER
        autoIncrement: true,     // <-- Tự động tăng
        primaryKey: true,
        unique: true
    },
    // user_id sẽ là INTEGER do quan hệ
    type: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    related_entity_id: {
        type: DataTypes.INTEGER, // <-- Thay đổi thành INTEGER để khớp với các ID khác
        allowNull: true
    }
}, {
    tableName: 'notifications',
    timestamps: true,
    underscored: true,
});

module.exports = Notification;