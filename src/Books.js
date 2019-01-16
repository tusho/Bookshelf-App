import React, {Component} from 'react';

class Books extends Component {

  render() {
    const books = this.props.books;
    const shelf = this.props.shelf.toLowerCase().replace(/\s/g, '');
    let selectedBooks = books.filter(book => shelf === book.shelf.toLowerCase())

    let handleClick = (e) => {
      let updateShelf = e.target.value.toLowerCase();
      console.log({updateShelf});
    }

    console.log(selectedBooks);
    return (
      <ol className="books-grid">
        {selectedBooks.map((book, id) => (
            <li key={id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail}})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onClick={handleClick} onChange={(event) => console.log(event)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))
        }
      </ol>
    )
  }
}

export default Books;
