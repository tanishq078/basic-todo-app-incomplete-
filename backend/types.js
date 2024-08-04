const zod  = require("zod");

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}

/*
    {
        title: string,
        description: string
    }

    {
        id: string
    }
*/


// const title = zod.string({
//     required_error: "Title is required",
//     invalid_type_error: "Title must be a string"
// })

// const description = zod.string({
//     required_error: "description is required",
//     invalid_type_error: "description must be a string"
// })

// const id = zod.string({
//     required_error: "id is required",
//     invalid_type_error: "id must be a string"
// })

