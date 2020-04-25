import React from 'react';
import axios from "axios";
import '../App.css'
import SearchDescriptionByID from './SearchDescriptionByID';
import mini1 from '../images/huhyeah.png';
import mini2 from '../images/yinyang.png';

class StrainDescription extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            getId: "",
            search : false,
        } 
        this.submitButton = this.submitButton.bind(this);
        this.getData = this.getData.bind(this);
        this.clearButton = this.clearButton.bind(this);
    }


  getData(event){
      event.preventDefault();
      this.setState({getId : event.target.value});
  }

  submitButton(e){
    e.preventDefault();
    this.setState({search:true})
  }

  clearButton(){
      this.setState({getId: "", search:false})
  }

    render(){
        return(
            <div>
                <h1 className = "text-white h1-desc"> Strain Description </h1>
                <h3> <small className="text-muted"> To begin search enter ID received from Strain Race</small> </h3>

                <img className = "mini-weedies" src={mini1} alt= "Con Feeling" />
                <img className = "mini-weedies2" src={mini2} alt= "Yin Feeling" />

                 <form onSubmit={this.submitButton}>
                    <input className = "text-field2" type="text" value = {this.state.answers} onChange = {this.getData}/>
                    <input className = "text-button" type="submit" />
                    <button className = "text-button" type = "button" onClick={this.clearButton}>Clear</button>


                </form>

                <div className = "desc-results"> 
                 {this.state.search ? <SearchDescriptionByID id={this.state.getId} />:""}
                </div>

            </div>
        )

    }

};

export default StrainDescription;