import React,{Component} from "react";
import {Link} from "react-router-dom";
import Book from "../Book/Book.js";
class SearchBar extends Component{
 	state={
    	loading:true,
        searchVal:" ",
        query: {}
  	}
   updateBooks=(bookidObj,shelf)=>{
      let {update}=this.props.bookApi;
     update(bookidObj,shelf).then((contacts)=>{
      console.log("c=>",contacts);
     });
     
   };

  	seachData=(e)=>{
      const searchValue=e.target.value || " ";
      e.preventDefault();
      const {search} =this.props.bookApi;
      search(searchValue).then((query)=>{
      this.setState(()=>({
         loading:false,
         searchVal: searchValue,
         query  
      }))
  });
      
};
renderBookComp=(bookNames)=>{
  let bookNamesArr=[];
  Object.keys(bookNames).forEach((name,index)=>{
    let BookObj=bookNames[name];
    let authors=BookObj.authors ? BookObj.authors.join(','):["Unknown"] ;
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


renderSearchData=()=>{
  return(<div>Enter the Keywords based on SearchItems.md..</div>);
}

   render(){
     const {query}=this.state;
     console.log(query);
   		return(
     <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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
export default SearchBar;