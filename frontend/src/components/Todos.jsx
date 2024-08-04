/*
    todos = [{
        title: 
        description:    
    }]
*/

export function Todos({todos}){

    return <div> 
        {todos.map(function(todo){
            <div>
            <h2>{todo.title}</h2>
            <h1>{todo.description}</h1>
            <button>{todo.completed == true ?"Completed": "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

