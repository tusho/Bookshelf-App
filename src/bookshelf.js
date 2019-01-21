import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {

    console.log(this.props.title);
    const books = this.props.books;
    const shelfValue = this.props.title.toLowerCase().replace(/\s/g, '');
    let selectedBooks = books.filter(book => shelfValue === book.shelf.toLowerCase());

    const bookList = selectedBooks.map((book) => (
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

    console.log({selectedBooks})
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
