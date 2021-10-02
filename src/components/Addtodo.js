import React from 'react'




function Addtodo({todo, deleteTodo}) {
   
    
    const todoList = todo.length > 0 ? (
        todo.map((todo) => {

            return todo.item !== "" ? (
                (
                    <div   className="wrapper" key={todo.id} >
                        <p className="txt">{todo.item}</p> <button onClick={() => { deleteTodo(todo.id) }}>@delete</button>
                    </div>
                )
            ) : (alert("Please Input A Todo!"))

        })
    ) : (
        <h3 className="bt">"Sorry you have 0 todos left. you can addd todos"</h3>
    )


    return (
        <div className="txt1">
            {todoList}
        </div>
    )
}

export default Addtodo
