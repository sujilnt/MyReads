import React from 'react'
import * as BooksAPI from './BooksAPI';

import './App.css'
import MyRead from "./components/MyRead/MyRead.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import {Link,Route} from "react-router-dom";
const BooksApp =()=> {
    return (
      <div className="app">
          	 <Route exact path="/" render={()=>(
    			<div>
    				<MyRead
                        bookApi={BooksAPI}
                    />
					<div className="open-search">
              		<Link to='/search'>Add a book</Link>
				</div>
            	</div>
            )} />
           <Route exact path="/search" render={()=>(<SearchBar bookApi={BooksAPI} />)} />
      </div>
    );
};

export default BooksApp
