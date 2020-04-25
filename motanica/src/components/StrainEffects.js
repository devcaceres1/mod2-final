import React from 'react';
import '../App.css'
import StrainEffectsResults from './StrainEffectsResults';
import high from "../images/high.png"
import madcry from "../images/madcry.png"
import yoga from "../images/yoga.png"

class StrainEffects extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            answers : "",
            search : false
        } 
        this.submitButton = this.submitButton.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.clearButton = this.clearButton.bind(this);
    }

  getInfo(e){
      e.preventDefault();
      this.setState({answers : e.target.value})
  }
  
    submitButton(e){
    e.preventDefault();
    this.setState({search : true});
    }    

    clearButton(){
        this.setState({getId: "", search:false})
    }

    render(){
        return(
            <div className = "strain-effects-wrapper">
                
                <h2 className = "text-white"> Strain Effects </h2>
                <div className = "weedies-wrapper"> 

                    <img className = "weedies" src={madcry} alt= "Mad Feeling" />

                    <img className = "weedies" src={high} alt = "Happy Effect" />
                   
                    <img className = "weedies" src={yoga} alt= "Relaxed Effect" />

                </div>
                 
                 <form className = "effects-form"onSubmit={this.submitButton}>

                    <input className = "text-field" type="text" value = {this.state.answers} onChange = {this.getInfo}/>
                    <input className = "text-button" type="submit" />
                    <button className = "text-button" type = "button" onClick={this.clearButton}> Clear </button>
                    <h4 className = "text-white"> To begin search enter ID received from Strain Race </h4>
                </form>

            <div className = "strain-effects-results">
    
            {this.state.search ? (<StrainEffectsResults id = {this.state.answers} />) : "It's 420 somewhere!"}

            </div>

            </div>
        )
        }

};

export default StrainEffects;