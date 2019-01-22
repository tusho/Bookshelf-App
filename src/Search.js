import React, {Component} from 'react';
import Books from './Books';
import * as BooksAPI from "./BooksAPI";

class Search extends Component {

  state = {
    books: []
  }

  search = (query) => {
     // this.setState({ searchResult: query })
     console.log({ query })
     BooksAPI.search(query).then(books => {
         this.setState({ books })
     })
  }

  render() {
    const {handleEvent, closeSearch} = this.props
    const {books} = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => {this.props.closeSearch()}}>Close</a>
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.search(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
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

export default Search;
