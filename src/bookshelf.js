import React, {Component} from 'react';
import Books from './Books';
import * as BooksAPI from './BooksAPI'


class BookShelf extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    let {books} = this.state;
    console.log({books});
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
