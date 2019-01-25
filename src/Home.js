import React from 'react'
import BookShelf from './bookshelf'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'


class Home extends React.Component {

    render() {

        const shelfTitles = ['Currently Reading', 'Want to Read', 'Read'];
        const shortenText = (value) => value.toLowerCase().replace(/\s/g, '');
        const { handleEvent } = this.props
        this.props.books.sort(sortBy('title'))
        
        return (
            
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelfTitles.map((shelfTitle) => (
                <BookShelf key={shelfTitle} title={shelfTitle} handleEvent={handleEvent} books={this.props.books.filter(book => book.shelf.toLowerCase() === shortenText(shelfTitle))}/>
              ))}
            </div>
            <div className="open-search">
              <Link to="/search"  onClick={() => {this.props.openSearch()}}>Add a book</Link>
            </div>
          </div>

        )

    }

}


export default Home;