import React from "react";
import BookSelectComp from "../BookSelectComp/BookSelectComp.js";
import PropTypes from "prop-types";

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

Book.PropTypes={
    id: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    updateFunc: PropTypes.func.isRequired,
    bookCover:PropTypes.any
};
export default Book;