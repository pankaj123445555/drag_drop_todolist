const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
 
  description: [{
    type: String,
    required: false
  }],
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};