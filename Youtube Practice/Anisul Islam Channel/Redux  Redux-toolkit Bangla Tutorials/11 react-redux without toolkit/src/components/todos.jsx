import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../services/actions/todoAct.jsx";

const Todos = () => {
    const dispatch = useDispatch();
    const {isLoading, todos, error} = useSelector((state) => state);

    useEffect(() => {
        dispatch(getData)
    }, [dispatch]);

    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && ("Loading...")}
            {error && <strong>{error}</strong>}
            {todos && (
                todos.map(todo=>{
                    return (
                        <div className={'card'} key={todo.id}>
                            <div className={'card-title'}><strong>{todo.id}</strong> {todo.title}</div>
                            <div className="card-body">
                                <div className={todo.completed ? "text-success" : "text-danger"}>Completed: {todo.completed ? "Yes" : "No"}</div>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    );
};

export default Todos;