// Simple in-memory model for messages
class Message {
  constructor(id, text, sender, timestamp) {
    this.id = id;
    this.text = text;
    this.sender = sender;
    this.timestamp = timestamp || new Date().toISOString();
  }

  static messages = [
    new Message(1, 'Hello world!', 'user1'),
    new Message(2, 'How are you?', 'user2')
  ];

  static getAll() {
    return this.messages;
  }

  static getById(id) {
    return this.messages.find(message => message.id === id);
  }

  static create(text, sender) {
    const id = this.messages.length + 1;
    const newMessage = new Message(id, text, sender);
    this.messages.push(newMessage);
    return newMessage;
  }

  static update(id, text) {
    const message = this.getById(id);
    if (message) {
      message.text = text;
      message.timestamp = new Date().toISOString();
      return message;
    }
    return null;
  }

  static delete(id) {
    const index = this.messages.findIndex(message => message.id === id);
    if (index !== -1) {
      const deletedMessage = this.messages[index];
      this.messages.splice(index, 1);
      return deletedMessage;
    }
    return null;
  }
}

module.exports = Message;
