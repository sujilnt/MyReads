import React,{Component} from "react";
import BookShelf from "../BookShelf/BookShelf.js";
import PropTypes from 'prop-types';

class MyRead extends Component{
  state={
    loading : true,
    bookNames: " ",
  };
  componentDidMount=()=>{
   		this.loadBooks()
 	};
  loadBooks=()=>{
     let {getAll}=this.props.bookApi;
  		getAll().then((bookNames)=>{
     		this.setState(()=>({
        		bookNames,
                loading:false
     		}));
  		});
   };
   updateBooks=(bookidObj,shelf)=>{
      let {update}=this.props.bookApi;
     update(bookidObj,shelf).then((data)=>{
       console.log(data);
        this.loadBooks();
     });
   };
 
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