import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {
        console.log(this.props.books);

      const bookList = this.props.books.map((book) => (
        <li key={book.id}>
          <Books
            shelf={book.shelf}
            id={book.id}
            title={book.title}
            thumbnail={book.imageLinks && book.imageLinks.thumbnail}
            authors={book.authors}
          />
        </li>
      ));


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
