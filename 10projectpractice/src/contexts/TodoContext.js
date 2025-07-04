import { useContext, createContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "todo msg",
            completed: false
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})



export const TodoProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}