import React from 'react';
import '../App.css'
import StrainEffectsResults from './StrainEffectsResults';
import high from "../images/high.png"
import sad from "../images/cute-sad-cry-scary-paranoid-marijuana-vector-25804032-removebg-preview.png"

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
                <div> 
                    <img src={high} alt = "Positive Effect" />
                    
                    <img src={sad} alt= "Apathetic Feeling" />
                    {/* <img src={Logo} alt= "Negative Effect" /> */}
                </div>
                 <form onSubmit={this.submitButton}>

                    <input className = "text-field" type="text" value = {this.state.answers} onChange = {this.getInfo}/>
                    <input className = "text-button" type="submit" />
                    <button type = "button" onClick={this.clearButton}> Clear </button>

                </form>

            <div className = "strain-effects-results">
        
            {this.state.search ? (<StrainEffectsResults id = {this.state.answers} />) : "Answers will render here!"}

            </div>

            </div>
        )
        }

};

export default StrainEffects;