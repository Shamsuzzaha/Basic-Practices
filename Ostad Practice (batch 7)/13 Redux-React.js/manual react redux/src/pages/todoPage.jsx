import React from 'react';

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
                                <input type="text" className={'form-check'}/>
                                <button className={'btn btn-success'}>Add Todo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TodoPage;