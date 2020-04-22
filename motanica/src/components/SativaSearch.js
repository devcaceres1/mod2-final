import React from "react";
import '../App.css'

class SativaSearch extends React.Component{
     constructor(props){
      super(props);
      this.state={
      }
  }  

   render(){
        return (
        <div>
        <form>
            <input type="text"/>
            <input type="submit" />
        </form>
        </div>
        )
    }
}

export default SativaSearch;