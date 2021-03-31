import React from 'react';
import { useTask } from '../utils/task-context';
import { IoAddCircleOutline } from "react-icons/io5";


const AddTodo = () => {
    const { addTodo } = useTask();
    const todoRef = React.useRef();
    const todoAddHandler = () => {
        addTodo(todoRef.current.value);
        todoRef.current.value = ''
    }
    return (
        <div className="container">
            <div className="col-md-5 mt-5 mx-auto">
                <div className="input-group mb-3">
                    <input ref={todoRef} type="text" className="form-control" placeholder="New todo ..." />
                    <button onClick={todoAddHandler} className="btn btn-success" type="button" id="button-addon2"><IoAddCircleOutline style={{color: "white"}} /> Add Todo</button>
                </div>

            </div>
        </div>

    );
};

export default AddTodo;