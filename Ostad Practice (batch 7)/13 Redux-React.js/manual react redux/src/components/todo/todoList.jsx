import React from 'react';

const TodoList = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr >
                                    <th >No.</th>
                                    <th>Task Name</th>
                                    <th>Edit</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Game</td>
                                    <td><button className={'btn btn btn-success'}>Edit</button></td>
                                    <td><button className={'btn btn-danger'}>Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;