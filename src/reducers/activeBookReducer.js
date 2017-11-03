export default function (state = null, action) {
    //redux doesnt like returning undefined , so state has to equal null
    //NEVER MUTATE STATE ; ex. state.title = book.title
    switch(action.type) {
        case "BOOK_SELECTED":
            return action.payload;
    }
    return state
} 