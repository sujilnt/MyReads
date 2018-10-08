import React,{Component} from "react";
import BookShelf from "../BookShelf/BookShelf.js";
import PropTypes from 'prop-types';

class MyRead extends Component{
  /*
   MyRead Component -> It consist of Collection of BookShelf compnents.
   Here there are 3 BookShelf Compoenents
  */
  state={
    loading : true,
    bookNames: " ",
  };
  componentDidMount=()=>{
   		this.loadBooks()
 	};

 // loadBooks function => its loads the data from the BookApi
 
  loadBooks=()=>{
     let {getAll}=this.props.bookApi;
  		getAll().then((bookNames)=>{
     		this.setState(()=>({
        		bookNames,
                loading:false
     		}));
  		});
   };

   // updateBooks function => The function that is used to update books based on BooksApi.

   updateBooks=(bookidObj,shelf)=>{
      let {update}=this.props.bookApi;
     update(bookidObj,shelf).then((data)=>{
       console.log(data);
        this.loadBooks();
     });
   };
 /*
    shelfData function => The function that is used to filter books based on selfnames.
    Ex: shelfData("read") 
 */
 shelfData=(shelfName)=>{
   let  filteredBookdata = this.state.bookNames;
    filteredBookdata=filteredBookdata.filter((row)=>{
      console.log(row.shelf===shelfName,row.shelf)
      return row.shelf===shelfName;
    });
   return filteredBookdata;
  };
 render(){
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
						updateFunc={this.updateBooks}
						
						
      			/>
   				<BookShelf 
      					selfName="Want To Read"
      					booksNameObj={this.shelfData("wantToRead")}
						updateFunc={this.updateBooks}
						
      			/>
				<BookShelf 
      					selfName="Read"
      					booksNameObj={this.shelfData("read")}
						updateFunc={this.updateBooks}
						
      			/>
            </div>): ""
 			}
           
          </div> 
    )
 }
}
MyRead.PropTypes={
    bookApi: PropTypes.func.isRequired
};
export default MyRead;
