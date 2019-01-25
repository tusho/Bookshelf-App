import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import {Route} from 'react-router-dom'
import Home from './Home'

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

  openSearch = () => { 
    this.setState({ showSearchPage: true })
  }


  render() {

    return (
      <div className="app">
            <Route exact path="/search" render={( {history} ) => (<Search closeSearch={this.closeSearch} handleEvent={this.handleEvent} booksOnShelf={this.state.books}/>)}/>
            <Route exact path="/" render={() => (<Home openSearch={this.openSearch} handleEvent={this.handleEvent} books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
