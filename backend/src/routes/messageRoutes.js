const express = require('express');
const { celebrate, Joi } = require('celebrate');
const MessageController = require('../controllers/messageController');

const router = express.Router();

// GET all messages
router.get('/', MessageController.getAllMessages);

// GET a specific message
router.get('/:id', MessageController.getMessageById);

// POST create a new message
router.post('/',
  celebrate({
    body: Joi.object({
      text: Joi.string().required(),
      sender: Joi.string().required()
    })
  }),
  MessageController.createMessage
);

// PUT update a message
router.put('/:id',
  celebrate({
    body: Joi.object({
      text: Joi.string().required()
    })
  }),
  MessageController.updateMessage
);

// DELETE a message
router.delete('/:id', MessageController.deleteMessage);

module.exports = router;
