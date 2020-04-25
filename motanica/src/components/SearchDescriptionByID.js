import React from "react";
import axios from 'axios';
import '../App.css';


class SearchDescriptionByID extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            info : [],
            id: this.props.id,
        } 
    }

async allInfo(){
    try{
    const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
    console.log(hiddenApi)
    const allData = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/data/desc/${this.state.id}`)
    console.log(allData.data);
    this.setState({
        info: allData.data
    })
}
catch(error){
    console.log(error);
}

}

componentDidMount(){
    this.allInfo();
}

retreive(){
    if(this.state.info===[] ||this.state.info===undefined){
        return;
    }
    else{
        return (<div>
        <p>Description</p>
        <p>{this.state.info.desc}</p></div>)
    }
}

render(){
    return (
      <div> {this.retreive()} </div>
    )
    }
}

export default SearchDescriptionByID;