import {GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "../constants/todosConst.jsx";
import axios from "axios";

export const getData = async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try{
        const data = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch({type: GET_TODOS_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: GET_TODOS_FAILURE, payload: error})
    }
}