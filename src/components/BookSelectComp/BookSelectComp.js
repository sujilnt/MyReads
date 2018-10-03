import React from "react";
const BookSelectComp = (props) => {
   const selectChange = (e)=>{
       console.log(e.target.value);    
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