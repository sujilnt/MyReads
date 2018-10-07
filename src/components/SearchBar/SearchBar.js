import React,{Component} from "react";
import {Link} from "react-router-dom";
import Book from "../Book/Book.js";
import PropTypes from 'prop-types';
/*
    searchComponent -> This component is basically an inpput search when an user adds a 
    keywords based on seach terms query is happens through Search() from the BookApi.  
*/
class SearchBar extends Component{
 	state={
    	loading:true,
        searchVal:" ",
        query: {}
  	};
 /*
 	updateBooks => A function that is used update the books to their 
 	respective shelves.
 */
   updateBooks=(bookidObj,shelf)=>{
      let {update}=this.props.bookApi;
     update(bookidObj,shelf).then((contacts)=>{
      console.log("c=>",contacts);
     });
   };

//seachData => A function that is retrives the data based on search query .
 	seachData=(e)=>{
        const {search} =this.props.bookApi;
        const searchValue=e.target.value || " ";
        e.preventDefault();
        search(searchValue).then((query)=>{
            this.setState(()=>({
                 loading:false,
                searchVal: searchValue,
                query
            }));
        });
 	};

//renderBookComp => A function that returns a list of Book Components . 
renderBookComp=(bookNames)=>{
  const bookNamesArr=[];
  Object.keys(bookNames).forEach((name,index)=>{
    const BookObj=bookNames[name];
    const authors=BookObj.authors ? BookObj.authors.join(','):["Unknown"] ;
    bookNamesArr.push(<Book 
                     		 key={index}
                             bookAuthor={authors}
						     bookTitle={BookObj.title}
						     bookCover={BookObj.imageLinks.thumbnail}
							 updateFunc={this.updateBooks}
							 id={BookObj.id}
						/>);
  });
  return bookNamesArr;
};
/*
	renderSearchData => if the Api results is empty then this function called 
    and it returns div . 
*/
renderSearchData=()=>{
  return(<div>Enter the Keywords based on SearchItems.md..</div>);
};

   render(){
     const {query}=this.state;
     console.log(query);
   		return(
     <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.seachData}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				{(this.state.query.length)?
					this.renderBookComp(query):
					(this.state.loading ? " ": this.renderSearchData()
                    )}
				</ol>
            </div>
          </div>
 		);
   }
}
SearchBar.PropTypes={
    bookApi: PropTypes.func.isRequired
};
export default SearchBar;
