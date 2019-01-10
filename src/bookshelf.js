import React, {Component} from 'react';
import Books from './Books';


class BookShelf extends Component {


  render() {
        console.log(this.props);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
              <Books books={this.props.books}/>
        </div>
      </div>
    )
  }
}

export default BookShelf;
