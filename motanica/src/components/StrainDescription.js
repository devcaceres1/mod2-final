import React from 'react';
import '../App.css';
import axios from "axios";

class StrainDescription extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            info : [],
            search : false,
            race : this.props.id,
        } 
        this.submitButton = this.submitButton.bind(this);
        this.getData = this.getData.bind(this);
        this.allInfo =this.allInfo.bind(this);
    }
    async allInfo(){
        try{
        const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
        const allData = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/search/${this.state.answers}`)     

        console.log(allData.data);
        this.setState({
            info: allData.data,
        })
    }
        catch(error){
            console.log(error);
        }
    
    }

  getData(event){
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
                    <input type="text" value = {this.state.answers} onChange = {this.getData}/>
                    <input type="submit" onClick = {this.allInfo}/>
                </form>

                <div> {this.state.info.map((response,index) => {
                
                return <div key={index}>
                    
                    <p>Name :{response.name}</p>
                    <p>Race :{response.race}</p>
                    <p>Effect : {response.effect}</p>
                    </div>
                }   
                )}</div>
                
            </div>
        )
        
    }

};

export default StrainDescription;