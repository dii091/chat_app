const Message = require('../models/message');

class MessageController {
  static getAllMessages(req, res) {
    try {
      const messages = Message.getAll();
      return res.json({
        status: 'success',
        data: messages
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static getMessageById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const message = Message.getById(id);
      
      if (!message) {
        return res.status(404).json({
          status: 'error',
          message: `Message with id ${id} not found`
        });
      }
      
      return res.json({
        status: 'success',
        data: message
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static createMessage(req, res) {
    try {
      const { text, sender } = req.body;
      const newMessage = Message.create(text, sender);
      
      return res.status(201).json({
        status: 'success',
        data: newMessage
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static updateMessage(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { text } = req.body;
      
      const updatedMessage = Message.update(id, text);
      
      if (!updatedMessage) {
        return res.status(404).json({
          status: 'error',
          message: `Message with id ${id} not found`
        });
      }
      
      return res.json({
        status: 'success',
        data: updatedMessage
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }

  static deleteMessage(req, res) {
    try {
      const id = parseInt(req.params.id);
      const deletedMessage = Message.delete(id);
      
      if (!deletedMessage) {
        return res.status(404).json({
          status: 'error',
          message: `Message with id ${id} not found`
        });
      }
      
      return res.json({
        status: 'success',
        data: deletedMessage,
        message: 'Message deleted successfully'
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  }
}

module.exports = MessageController;
