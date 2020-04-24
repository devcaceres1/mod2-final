import React from 'react';
import SearchResults from './SearchResults';
import '../App.css';
import axios from "axios";

class StrainId extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            info : [],
            search : false,
            race : this.props.id,
        } 
        this.submitButton = this.submitButton.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.raceId =this.raceId.bind(this);
    }
    async raceId(){
        try{
        const getData = await axios.get(`https://strainapi.evanbusse.com/H0WNPak/strains/search/race/${this.state.answers}`)               
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
    console.log(this.state.answers);
  }
      
    render(){
        return(
            <div>
                 <form onSubmit={this.submitButton}>
                    <input type="text" value = {this.state.answers} onChange = {this.getInfo}/>
                    <input type="submit" onClick = {this.raceId}/>
                </form>

                <div> {this.state.info.map((response,index) => {
                
                return <div key={index}>
                    
                    <p>Name :{response.name}</p>
                    <p>Race :{response.race}</p>
                    </div>
                }   
                )}</div>
                
            </div>
        )
        
    }

};



export default StrainId