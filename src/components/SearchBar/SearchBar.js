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
     addShelf=(shelfList,searchQuery,searchValue)=>{
         const bookdata=this.props.bookData;
         if(searchQuery.length !== undefined){
             searchQuery.map((row)=>{
                 bookdata.forEach((searchrow)=>{
                         row.id===searchrow.id ? row.shelf=searchrow.shelf : row.shelf="none" ;
                         console.log(row.id===searchrow.id);
                 });
             return row;
             });
         }
         this.setState(()=>({
             loading:false,
             searchVal: searchValue,
             query:searchQuery
         }));

    };
//seachData => A function that is retrives the data based on search query .
    seachData=(e)=>{
        const {updatedList,bookApi}=this.props;
        const searchValue=e.target.value || " ";
        e.preventDefault();
        bookApi.search(searchValue).then((query)=>{
            this.addShelf(updatedList,query,searchValue);
        });
    };

//renderBookComp => A function that returns a list of Book Components .
    renderBookComp=(bookNames,updateFunc)=>{
        const bookNamesArr=[];
        Object.keys(bookNames).forEach((name,index)=>{
            const BookObj=bookNames[name];
            const authors=BookObj.authors ? BookObj.authors.join(','):["Unknown"] ;
            bookNamesArr.push(<Book
                key={index}
                bookAuthor={authors}
                bookTitle={BookObj.title}
                bookCover={BookObj.imageLinks}
                updateFunc={updateFunc}
                id={BookObj.id}
                bookState={BookObj.shelf}
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
        const {updateFunc}=this.props;
        const {query}=this.state;
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
                            this.renderBookComp(query,updateFunc):
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
