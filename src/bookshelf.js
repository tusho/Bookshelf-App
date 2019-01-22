import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {
    const { books, handleEvent } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Books
                  book={book} 
                  shelf={book.shelf}
                  id={book.id}
                  title={book.title}
                  thumbnail={book.imageLinks && book.imageLinks.thumbnail}
                  authors={book.authors}
                  handleEvent = {handleEvent}
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
