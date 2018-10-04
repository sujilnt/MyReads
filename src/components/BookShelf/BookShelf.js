import React,{Component} from "react";
class BookShelf extends Component{
   state={
    loading : true
   };
    render(){
    	renturn(
    		 <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                       Book Component
                      </li>
                    </ol>
                  </div>
                </div>    	
    
        )
    }
}
export default BookShelf;