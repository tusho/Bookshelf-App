import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {
    const books= this.props.books;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Books />
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
