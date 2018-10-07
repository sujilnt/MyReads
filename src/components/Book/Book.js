import React from "react";
import BookSelectComp from "../BookSelectComp/BookSelectComp.js";
const Book=(props)=>{
    const {updateFunc,bookCover,id,bookTitle,bookAuthor}=props;
    return(
        <div className="book">
             <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${bookCover} )`}}></div>
                    <BookSelectComp
					    bookupdateFunc={updateFunc}
					    BookId={id}
                    />
                </div>
             <div className="book-title">{bookTitle}</div>
             <div className="book-authors">{bookAuthor}</div>
     </div>
 );
};

export default Book;