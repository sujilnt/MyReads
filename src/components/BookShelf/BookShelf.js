import React from "react";
import Book from "../Book/Book";
import PropTypes from "prop-types";
/*
BookShelf component -> A component that contains list of Books Component
renderBookshelfContents => A function returns a collections of Book Component.
*/
const renderBookshelfContents = (bookNames,updateFunc)=>{
    let renderItems=[];
    bookNames.forEach((row)=>{
        let authors=row.authors ? row.authors.join(','):["Unknown"];
        renderItems.push(
            <li key={row.id} >
                <Book
                    bookAuthor={authors}
                    bookTitle={row.title}
                    bookCover={row.imageLinks.thumbnail}
                    updateFunc={updateFunc}
                    id={row.id}
                />
            </li>
        );
    });
    return renderItems;
};
const BookShelf = (props)=>{
    const {booksNameObj,updateFunc}=props;
   return(
       <div className="bookshelf">
           <h2 className="bookshelf-title">{props.selfName}</h2>
           <div className="bookshelf-books">
               <ol className="books-grid">
                   {renderBookshelfContents(booksNameObj,updateFunc)}
               </ol>
           </div>
       </div>

   );

};

BookShelf.PropTypes={
    selfName: PropTypes.string.isRequired,
    booksNameObj: PropTypes.func.isRequired,
    updateFunc: PropTypes.func.isRequired
};
export default BookShelf;