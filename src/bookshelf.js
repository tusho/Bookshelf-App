import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter(book => book.shelf.toLowerCase() === this.props.title.toLowerCase().replace(/\s/g, '')).map((book) => (
              <li key={book.id}>
                <Books
                  shelf={book.shelf}
                  id={book.id}
                  title={book.title}
                  thumbnail={book.imageLinks && book.imageLinks.thumbnail}
                  authors={book.authors}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
