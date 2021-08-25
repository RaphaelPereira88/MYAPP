import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import CurrentBook from './CurrentBook'
import WantoReadBook from './WantoReadBook'
import Read from './Read'

class Mainpage extends Component {

    render(){
        return(
            <div className="app">
                <div> 
                    <div className="list-books">
                        <CurrentBook/>
                        <WantoReadBook />
                        <Read />
                    </div>
                    <div className="open-search">
                        <Link 
                        to ='/search'
                        className="open-search"
                        >Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mainpage