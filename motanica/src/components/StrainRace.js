import React from 'react';
import '../App.css';
import axios from "axios";
import sativaplant from '../images/sativaplant.jpg';
import indicaplant from '../images/indicaplant.jpg'

class StrainRace extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            info : [],
            search : false,
            race : this.props.id,
        } 

        this.clearButton = this.clearButton.cing(this);
        this.submitButton = this.submitButton.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.raceId =this.raceId.bind(this);

    }
    async raceId(){
        try{
        const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
        const getData = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/search/race/${this.state.answers}`)               
        console.log(getData.data);
        this.setState({
            info: getData.data,
        })
    }
        catch(error){
            console.log(error);
        }
    
    }

  getInfo(event){
      event.preventDefault();
      this.setState({answers : event.target.value});
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
            <div className = "race-wrapper">
                <div className = "race-upper-wrapper"> 
                <img className= 'Canna' src ={indicaplant} alt = "Indica Plant"/> 

                 <form onSubmit={this.submitButton}>
                    <input className = "text-field" type="text" value = {this.state.answers} onChange = {this.getInfo}/>
                    <input className = "text-button" type="submit" onClick = {this.raceId}/>
                    <button className = "text-button" type = "button" onClick={this.clearButton}>Clear</button>
                </form>

                <img className= 'Canna' src ={sativaplant} alt = "Sativa Plant"/>

                </div>

                <div> {this.state.info.map((response,index) => {
                
                return <div className = "strain-race-results" key={index}>
                    
                    <p> Strain Name :{response.name} </p>
                    <p> Strain ID :{response.id}</p>
                    </div>
                }   
                )}</div>
                
            </div>
        )
        
    }

};



export default StrainRace