import React from "react";
import Book from "../Book/Book";

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
export default BookShelf;