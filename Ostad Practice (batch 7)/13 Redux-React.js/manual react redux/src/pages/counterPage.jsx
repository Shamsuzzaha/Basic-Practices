import React from 'react';
import Counter from "../components/counter.jsx";

const CounterPage = () => {
    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <Counter />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterPage;