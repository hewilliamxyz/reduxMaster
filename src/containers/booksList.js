import React, { Component} from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        // console.log('renderList props', this.props)
        return this.props.books.map((book) => {
            // console.log(this.props)
            return (
                <li 
                key={book.title}
                onClick={()=> this.props.selectBook(book)}
                className="list-group-item">
                    {book.title}
                    {/* {console.log(book.title)} */}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {/* {console.log("this.renderList", this.renderList())} */}
                {this.renderList()}
            </ul>
        )
    }
};

function mapStateToProps (state) {
    return {
        //whatever is returned will show up as props
        //inside of BookList
        books: state.books
    }
}

//anything returned from this function will end up as props
//will be in the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectbook is called, the result should be
    //passed to all of our reducers
    return bindActionCreators( {selectBook: selectBook}, dispatch)
}

//promote Booklist from a component to a container
//needs to know about this new dispatch method, selectBook,
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);