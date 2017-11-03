import { combineReducers } from 'redux';
import BooksReducer from './booksReducer';
import ActiveBookReducer from './activeBookReducer'

//what the state looks like
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
