import React,{Component} from "react";
import Book from "../Book/Book";
class BookShelf extends Component{
   state={
    loading : true, 
   };
    renderBookshelfContents = (bookNames)=>{
      let renderItems=[];
      bookNames.forEach((row,index)=>{
      	let authors=row.authors ? row.authors.join(','):["Unknown"];
         renderItems.push(
         <li key={row.id} >
           <Book 
            	bookAuthor={authors}
				bookTitle={row.title}
				bookCover={row.imageLinks.thumbnail}
				updateFunc={this.props.updateFunc}
				id={row.id}
           />
         </li>
         );
      });
    return renderItems;
    }
    render(){
        const {booksNameObj}=this.props;
       console.log(booksNameObj);
    	return(
    		 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.selfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    
      					{this.renderBookshelfContents(booksNameObj)}
                   
                    </ol>
                  </div>
                </div>    	
    
        )
    }
}
export default BookShelf;