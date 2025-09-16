import React from 'react';
import {useSelector} from "react-redux";

const Todos = () => {

    const {isLoading, todos, error} = useSelector((state) => state);


    return (
        <div>
            <h2>Todos App</h2>
            {isLoading ? ('hello'):"false"}
        </div>
    );
};

export default Todos;