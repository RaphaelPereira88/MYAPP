import React,{Component} from 'react';

class Book extends Component {
    render(){
        const {allbooks} = this.props
        return(
            <div>
                <div className="book-title">{allbooks.title}</div>
                <div className="book-authors">{allbooks.authors}</div>
            </div>
        )
    }
}

export default Book