import React, {useReducer} from 'react';
import {reducer} from './reducer.js';

const booksData = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'},
]



const UseReducer = () => {
    // use State
    // const [books, setBooks] = React.useState(booksData);
    // const [isShow, setShow] = React.useState(false);
    // const [modalText, setModalText] = React.useState('');

    // ---reducer state
    const initialState ={
        books: booksData,
        isShow: false,
        modalText: ""
    }
    const [add, setAdd] = React.useState('');
    const [myState, dispatch] = useReducer(reducer, initialState );


    //--- form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {id:new Date().getTime().toString(), name:add}
        dispatch({type:"ADD", payload: newBook})
        setAdd('')

        // setBooks((prev)=>{
        //     const newBook = {id:new Date().getTime().toString(), name:add}
        //     return [...prev, newBook]
        // })
        // setShow(true)
        // setModalText('Successfully added.')
    }

    //--- delete books
    const deleteBtn = (id)=>{
        dispatch({type: "DELETE", payload:id})
    }


    //modal function
    const Modal = ({text}) =>{
        return <p>{text}</p>
    }

    return (
        <div>
            <h3>Books List</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={add} onChange={(e)=>setAdd(e.target.value)} />
                <button type={'submit'}>submit</button>
            </form>

            {/*modal message*/}
            {myState.isShow && <Modal text={myState.modalText}/>}

            {myState.books.map((book) => {
                    const {id, name} = book
                    return <li key={id}>
                        {name}
                        <button onClick={()=>deleteBtn(id)}>Delete</button>
                    </li>
                }
            )}
        </div>
    );
};

export default UseReducer;