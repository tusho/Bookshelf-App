import React, {Component} from 'react';

class Search extends Component {

  render() {
    const closeSearch = this.props
    console.log(closeSearch)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.closeSearch()}>Close</a>
          <div className="search-books-input-wrapper">
            {}
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default Search;
