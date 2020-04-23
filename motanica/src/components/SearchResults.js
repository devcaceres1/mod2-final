import React from "react";
import '../App.css'
import axios from "axios"
import StrainId from "./StrainId";

class SearchResults extends React.Component{
     constructor(props){
      super(props);
      this.state={
          raceInfo : ""
      }
  }  

  async raceId(){
    const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
    console.log(hiddenApi)
    try{
    let getData = await axios.get("https://strainapi.evanbusse.com/H0WNPak/strains/search/race/indica")
    // let getData = await axios.get("https://strainapi.evanbusse.com/H0WNPak/strains/search/all")                 
    this.setState({raceInfo: getData.data})
    console.log(this.state.raceInfo);
    console.log(this.props.raceInfo)
    console.log(this.props.strain)
    console.log(getData)
}
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.raceId();
}
unDefined() {
    if (this.state.raceInfo=== null || this.state.raceInfo == undefined){
        return "Not found";
    } else {
        // let race=this.state.raceInfo.map((response,index)=>{
            // return (<div id={index}>
              {/* <h3 id={index} >{response.name}</h3>  */}
             {/* <h3 id={index} >{response.id}</h3>  */}

           {/* </div> )});  */}
            //  return race;
         }
    }
   render(){
        return (
        <div>
          {this.unDefined()}
        </div>
        )
    }
}

export default SearchResults;











// import React from 'react';
// import StrainId from './StrainId'
// import '../App.css'

// const initialState;

// class searchResults extends React.Component{
//     constructor(props) {
//         super(props) :
//         this.state = {
//             answers : initialState,
//             search : false
//         }
//         this.getInfo(event)=this.getInfo(event).bind(this);
//         this.submitButton=this.submitButton.bind(this);
//   }  
//   getInfo(event){
//       event.preventDefault();
//       this.setState({answers: event.target.value})
//   }
//   submitButton(event){
//     event.preventDefault();
//     this.setState({search: true});
//   }    
//     render(){
//         return(
//             <div>
//                  <h1> Results </h1>
//                  <form onSubmit={this.submitButton}>
//                     <input type="text" value = {this.state.answers}/>
//                     <input type="submit" onChange = {this.myChangeHandler} />
//             <div> 


//             </div>
//                 </form>
//             </div>
//         )
//     }
// };



// export default searchResults;