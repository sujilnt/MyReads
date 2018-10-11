import React,{Component} from "react";
import PropTypes from "prop-types";

class BookSelectComp extends Component{
  state={
    value: "none"
  };
/* 
    select change => Its basically an OnChange method that gets called when user selects a field in the dropdown. 
*/ 
  selectChange = (e)=>{
    const {bookupdateFunc,BookId}=this.props;
       let BookObj={
         id: BookId,
       };
       const selectValue = e.target.value;
       // bookupdateFunc => This function is to update the book .
       bookupdateFunc(BookObj,selectValue);
       this.updatestate(selectValue);
    };
    updatestate=(selectValue)=>{
     this.setState({
        value: selectValue
       });
   };

   render(){
        const {value} = this.state;
        const {BookId,bookState} = this.props;
   		return(
		<div className="book-shelf-changer">
               <select ref={BookId} value={bookState!=="none"? bookState : value } onChange={this.selectChange}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read" >Read</option>
                 <option value="none" >None</option>
          </select>
    </div>
	);
   }
	
}
BookSelectComp.PropTypes={
    BookId: PropTypes.string.isRequired,
    bookupdateFunc: PropTypes.func.isRequired,
};
export default BookSelectComp;
