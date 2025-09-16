import React from 'react';
import {useSelector} from "react-redux";
import {deleteAlert} from "../../feature/deleteAlert.jsx";
import {editAlert} from "../../feature/editAlert.jsx";

const TodoList = () => {
    const list = useSelector(state => state.todos.list)

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
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item}</td>
                                    <td><button onClick={()=>editAlert(index, item)}  className={'btn btn btn-success'}>Edit</button></td>
                                    <td><button onClick={()=>deleteAlert(index)} className={'btn btn-danger'}>Remove</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;