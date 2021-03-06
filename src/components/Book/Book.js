import React from "react";
import BookSelectComp from "../BookSelectComp/BookSelectComp.js";
import PropTypes from "prop-types";
import bookNo_cover from "../../icons/bookNo.jpg";
/*
 BookComponent -> A stateless component that is used for displaying Book .
 BookSelectComp -> A controlled select component that is used to decide whether the Book should go like in  
 ([Read Self  or  Currently Reading shelf]) based on user input .
*/
const Book=(props)=>{
    const {updateFunc,bookCover,id,bookTitle,bookAuthor,bookState}=props;
    let coverPic = bookCover === undefined ?  bookNo_cover : bookCover.thumbnail ;
    return(
        <div className="book">
             <div className="book-top">
                 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${coverPic} )`}}></div>
                    <BookSelectComp
					    bookupdateFunc={updateFunc}
					    BookId={id}
						bookState={bookState}
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
