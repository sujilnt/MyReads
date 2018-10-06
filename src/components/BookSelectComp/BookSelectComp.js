import React from "react";
const BookSelectComp = (props) => {
  const {bookupdateFunc,BookId}=props;
   const selectChange = (e)=>{
       let BookObj={
         id: BookId
       };
       const selectValue = e.target.value;
       bookupdateFunc(BookObj,selectValue);
    }
   
	return(
		<div className="book-shelf-changer">
               <select onChange={selectChange}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                 <option value="none">None</option>
          </select>
    </div>
	);
}
export default BookSelectComp;