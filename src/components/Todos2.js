import { memo } from "react";
import { useState, useCallback } from "react";

const MyTodos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

let task = 0;

const Todos2 = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        task++;
        setTodos((t) => [...t, "New Task " + task]);
    }, [todos]);

    return (
        <>
            <MyTodos todos={todos} addTodo={addTodo} />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default memo(Todos2);
