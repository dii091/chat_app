// src/models/message.model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/database');

const Message = sequelize.define('Message', {
    message_id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,    
        primaryKey: true,
        unique: true
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('text', 'image', 'video', 'file', 'system'),
        defaultValue: 'text'
    },
    attachment_url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    deleted_by_sender: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'messages',
    timestamps: false,
    underscored: true,
});

module.exports = Message;