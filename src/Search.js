import React, {Component} from 'react';
import Books from './Books';
import * as BooksAPI from "./BooksAPI";
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'

class Search extends Component {

  state = {
    books: [],
    query: ''
  }

  newQuery = (query) => {
    this.setState({ query: query })
  }

  search = (query) => {
    this.newQuery(query)
     query ? (
       BooksAPI.search(query.trim(), 20).then(books => {
            if(!books.error) {
              books.map((book) => (
                book.shelf = 'none')
                )
              this.setState({ books })
              books.map((book) => (
                this.props.booksOnShelf.filter((onshelf) => onshelf.id === book.id).map(onshelf => book.shelf = onshelf.shelf)
                )
              )
              this.setState({ books })
              }
       })
     ) : (
       this.setState({ books : [] })
     )
  }

  render() {
    const {handleEvent} = this.props
    const {books} = this.state;
    
    books.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="../" className="close-search" onClick={() => {this.props.closeSearch()}}>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value = {this.state.query}
              onChange={(e) => this.search(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Books
                  book={book}
                  title={book.title}
                  shelf={book.shelf}
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
