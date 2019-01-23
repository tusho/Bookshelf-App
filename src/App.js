import React from 'react'
import './App.css'
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'
import Search from './Search';
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  handleEvent  = (e, book) => {
      const newShelf = e.target.value

      if (this.state.books) {

        BooksAPI.update(book, newShelf).then(() => {

          book.shelf = newShelf;
          this.setState(state => ({
            books: state.books.filter(newBook => newBook.id !== book.id).concat([ book ])
          }))
        })
      }
    }

  closeSearch = () => {
    this.setState({ showSearchPage: false })
  }


  render() {

    const shortenText = (value) => value.toLowerCase().replace(/\s/g, '');
    const shelfTitles = ['Currently Reading', 'Want to Read', 'Read'];

    this.state.books.sort(sortBy('title'))

    return (
      <div className="app">
        {this.state.showSearchPage ? (
            <Search closeSearch={this.closeSearch} handleEvent={this.handleEvent}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelfTitles.map((shelfTitle) => (
                <BookShelf key={shelfTitle} title={shelfTitle} handleEvent={this.handleEvent} books={this.state.books.filter(book => book.shelf.toLowerCase() === shortenText(shelfTitle))}/>
              ))}
            </div>
            <div className="open-search">
              <Link to="/search" onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
