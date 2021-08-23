import React, {useState} from 'react';

const Todos = () => {
    const [todos,setTodos] = useState(["Задачи:"])
    const [text,setText] = useState('')
    const addInput = (e) =>{
        setText(e.target.value)
    }
    const addTodo = () => {
        if (text.trim()){
            setTodos([...todos,text])
        }
        setText("")
    }
    const delTodo = () =>{
        setTodos(todos.slice(0,-1))
    }
    return (
        <div>
            <input type="text" value={text} onChange={addInput}/>
            <button onClick={addTodo}>Добавить дело</button>
            <button onClick={delTodo}>Удалить дело</button>
            <ul>
                {todos.map(el=>
                    <li>{el}</li>
                )}
            </ul>
        </div>
    );
};

export default Todos;
