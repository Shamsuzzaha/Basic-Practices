export const reducer = (state, action)=>{
    if (action.type==='ADD'){
        const allBook = [...state.books, action.payload]
        return {
            ...state,
            books: allBook,
            isShow: true,
            modalText: 'Add Book',
        }
    }

    if (action.type==='DELETE'){
        const afterBooks = [...state.books].filter(item => item.id !== action.payload)
        return {
            ...state,
            books: afterBooks,
            isShow: true,
            modalText: 'Delete Book',
        }
    }

    return state
}