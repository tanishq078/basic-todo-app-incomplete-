/*
    Todo {
        title: string,
        description: string,
        completed: boolean
    }
*/

const mongoose = require("mongoose");
// mongodb+srv://stanishq696969:UVw3u6VWqwBoosow@cluster0.5m4lgjn.mongodb.net/
// env file
mongoose.connect("mongodb+srv://stanishq696969:UVw3u6VWqwBoosow@cluster0.5m4lgjn.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}