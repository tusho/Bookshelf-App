import React, {Component} from 'react';

class Books extends Component {

  render() {
    const {handleEvent, book, shelf, id, title, authors, thumbnail} = this.props;
    return (
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select  value={shelf} onChange={(e) => handleEvent(e, book)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
              </div>
    )
  }
}

export default Books;
