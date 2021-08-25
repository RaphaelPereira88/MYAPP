import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI'


class Search extends Component {
    state = {
        newbooks:[{
            key:"",
            title:"",
            authors:""
        }
        ]
    }
    
    componentDidMount() {
        BooksAPI.getAll()
          .then((newbooks) => {
            this.setState(() => ({
                newbooks
            }))
          })
      }
    
    render(){
        const allbooks = Object.keys(this.state.newbooks).map(id => 
            <Book
                key = {id}
                title = {this.state.newbooks[id].title}
                authors = {this.state.newbooks[id].authors}
            />
    )
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to = '/'
                        className="close-search" 
                        >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            className = 'search'
                            type="text" 
                            placeholder="Search by title or author"
                            value = {this.state.newbook}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Book allbooks= {allbooks}/>
                </div>
            </div>
        )
    }
}

export default Search