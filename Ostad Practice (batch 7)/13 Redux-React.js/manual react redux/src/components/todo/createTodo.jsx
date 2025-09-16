import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTask} from "../../redux/state/todo/todoSlice.js";

const CreateTodo = () => {
    const dispatch = useDispatch();
    const customInput = useRef(null);
    return (
        <>
            <div>
                <input ref={customInput} type="text" className={'form-check'}/>
                <button onClick={()=>{
                    if(customInput.current.value !== ""){
                        dispatch(AddTask(customInput.current.value));
                        customInput.current.value = "";
                    }
                }} className={'btn btn-success'}>Add Todo</button>
            </div>
        </>
    );
};

export default CreateTodo;