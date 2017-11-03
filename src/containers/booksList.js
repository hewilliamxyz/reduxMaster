import React, { Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() {
        // console.log('renderList props', this.props)
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
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
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);