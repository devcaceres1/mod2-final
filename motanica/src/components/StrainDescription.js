import React from 'react';
import axios from "axios";
import '../App.css'
import SearchDescriptionByID from './SearchDescriptionByID';

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
                 <form onSubmit={this.submitButton}>
                    <input className = "text-field" type="text" value = {this.state.answers} onChange = {this.getData}/>
                    <input className = "text-button" type="submit" />
                    <button className = "text-button" type = "button" onClick={this.clearButton}>Clear</button>


                </form>

                <div> 
                 {this.state.search ? <SearchDescriptionByID  id={this.state.getId} />:""}
                </div>

            </div>
        )

    }

};

export default StrainDescription;