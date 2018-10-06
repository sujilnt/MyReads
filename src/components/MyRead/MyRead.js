import React,{Component} from "react";
import Book from "../Book/Book.js";
import BookShelf from "../BookShelf/BookShelf.js";
class MyRead extends Component{
  
  state={
    loading : true,
    bookNames: " ",
    shelfBook:{
       currentlyReading: "",
       wantToRead: "",
       read: "",
      
    }
  };
  componentDidMount=()=>{
   		let {getAll}=this.props.bookApi;
  		getAll().then((bookNames)=>{
     		this.setState(()=>({
        		bookNames,
                loading:false
     		}));
  		});
 	}

 shelfData=(shelfName)=>{
   let  filteredBookdata = this.state.bookNames;
    filteredBookdata=filteredBookdata.filter((row)=>{
      console.log(row.shelf===shelfName,row.shelf)
      return row.shelf===shelfName;
    });
   return filteredBookdata;
  }  
 render(){
   //console.log(ShelfData);
    return(
     <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
      		{
             !this.state.loading ?
            (<div className="list-books-content">
               <BookShelf 
      					selfName="Currently Reading"
      					booksNameObj={this.shelfData("currentlyReading")}
      			/>
   				<BookShelf 
      					selfName="Want To Read"
      					booksNameObj={this.shelfData("wantToRead")}
      			/>
				<BookShelf 
      					selfName="Read"
      					booksNameObj={this.shelfData("read")}
      			/>
   				
            </div>): ""
 			}
           
          </div> 
    )
 }
}
export default MyRead;