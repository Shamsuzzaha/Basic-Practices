
// Post related
const initialState = {
    posts:["hello"]
};
export const postReducer = (state=initialState, action) => {
    switch (action.type) {
        case "get":
            return {
                ...state,
            }
    }
}