import React, { Component } from 'react';
import BooksList from '../containers/booksList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BooksList/>
        <BookDetail/>
      </div>
    );
  }
}
