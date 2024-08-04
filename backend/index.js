const express = require("express");
const {updateTodo, createTodo} = require("./types");
const {todo} = require("./db");
const cors = require("cors");
const app = express();

// app.use(cors({
//     origin: "http://localhost:5173"
// }));

app.use(cors());

app.use(express.json());
app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todo",async function(req, res){
    const todos =await todo.find({});
    // console.log(todos) promise
    res.json({
        todos: todos
    })
    // res.json({
    //     todos: []
    // })
})

app.put("/completed",async function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

// write a basic express boilerplate code,
// with express.json() middleware

// body{
//         title: string
//         description: string
// }

app.listen(3000);