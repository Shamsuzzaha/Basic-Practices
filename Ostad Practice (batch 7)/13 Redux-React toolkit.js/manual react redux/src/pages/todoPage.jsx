import React from 'react';
import CreateTodo from "../components/todo/createTodo.jsx";
import TodoList from "../components/todo/todoList.jsx";

const TodoPage = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h3>Todo Task Manager</h3>
                            </div>
                            <div className="card-body">
                                <CreateTodo/>
                                <TodoList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TodoPage;