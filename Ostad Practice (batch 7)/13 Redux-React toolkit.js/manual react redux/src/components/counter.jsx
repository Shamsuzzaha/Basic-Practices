import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, customValue} from '../redux/state/Counter/counterSlice.jsx'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const inputNumber = useRef();

    return (
        <div>
            <div className="card">
                <div className="card-header bg-secondary text-white">
                    <h3>counter app</h3>
                </div>
                <div className="card-body">
                    <h4>{count}</h4>
                    <div className="mt-3 d-flex gap-3">
                        <button onClick={()=>dispatch(increment())} className={'btn btn-success'}>increase</button>
                        <button onClick={()=>dispatch(decrement())} className={'btn btn-danger'}>decrease</button>
                    </div>
                    <div className={'my-3'}>
                        <input ref={inputNumber} type="number"  />
                        <button onClick={()=>dispatch(customValue(inputNumber.current.value))} className={'btn btn-success ms-2'}>customize value</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;