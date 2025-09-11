import React from 'react';
import {useDispatch} from "react-redux";
import {AddTask} from "../../redux/state/todo/todoSlice.js";

const CreateTodo = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <input type="text" className={'form-check'}/>
                <button onClick={()=>dispatch(AddTask())} className={'btn btn-success'}>Add Todo</button>
            </div>
        </>
    );
};

export default CreateTodo;