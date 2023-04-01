const express = require('express');
const app = express();
const Port = 5000;
const {connectDb} = require('./config/db');
connectDb();
app.use(express.json());
const {Todo} = require('./Model/todo_model');
var cors = require('cors');
app.use(cors());


// lets write an api for storing the data in the database
app.post('/api/create',async (req,res)=>{
     
    console.log('finally it called',req.body.value);
    const todo = await Todo.find();
    var todos;
    if(todo.length==0)
    {
          todos = new Todo;
    }
    else
    {
        todos = todo[0];
    }
    const descriptions = todos.description;
    descriptions.push(req.body.value);
    await todos.save();
    res.json({todos})
})
// api to get the data from the database
app.get('/api/get', async (req,res)=>{
    const todo = await Todo.find();

    if(todo.length==0)
    {
        res.json({});
    }
    const descriptions = todo[0].description;
    return res.json({descriptions});
})
// api to update the data in the database
app.put('/api/update', async (req,res)=>{
    const {arr} = req.body;
    // now we need to update the array in the todo table
    const todo = await Todo.find();
    const todos = todo[0];
    todos.description = arr;
    await todos.save();
    const descriptions = todo[0].description;
    return res.json({descriptions});
})

app.listen(Port,()=>{
    console.log(`server is listen on port no ${Port}`);
})
