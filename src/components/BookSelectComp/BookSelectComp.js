import React,{Component} from "react";
class BookSelectComp extends Component{
  state={
    value: "move"
  }
  selectChange = (e)=>{
    const {bookupdateFunc,BookId}=this.props;
       let BookObj={
         id: BookId
       };
       const selectValue = e.target.value;
       bookupdateFunc(BookObj,selectValue);
       this.updatetate(selectValue);
    }
   updatetate=(selectValue)=>{
     this.setState(()=>({
        value: selectValue
       }));
   }
   render(){
   		return(
		<div className="book-shelf-changer">
               <select value={this.state.value} onChange={this.selectChange}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading" style={{padding:"5px"}}>Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                 <option value="none">None</option>
          </select>
    </div>
	);
   }
	
}
export default BookSelectComp;