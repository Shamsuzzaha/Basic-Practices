import Swal from "sweetalert2";
import store from "../redux/store/store.js";
import {EditTask} from "../redux/state/todo/todoSlice.js";

export const editAlert = async (index, item) => {
    const inputValue = item;
    const { value: newText } = await Swal.fire({
        title: "Enter your new text",
        input: "text",
        inputLabel: "Your current text",
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return "You need to write something!";
            }
        }
    });
    if (newText) {
        store.dispatch(EditTask({index: index, text: newText}));
        await Swal.fire(`Your updated text is ${newText}`);
    }
}