import React from 'react';
import SearchResults from './SearchResults';
import '../App.css'

class StrainId extends React.Component{
    constructor(props){
    super(props)
        this.state = {
            answers : "",
            search : false
        } 
        this.submitButton = this.submitButton.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }


  getInfo(e){
      e.preventDefault();
      this.setState({answers : e.target.value})
      console.log(e)
  }
  

  submitButton(e){
    e.preventDefault();
    this.setState({search : true});
  }    
    render(){
        return(
            <div>
                 <form onSubmit={this.submitButton}>
                    <input type="text" value = {this.state.answers} onChange = {this.getInfo}/>
                    <input type="submit" />
                </form>

            <div>
            {this.state.search ? (<SearchResults id = {this.state.answers} />) : "Answers"}
            </div>
            </div>
        )
        console.log(this.submitButton())
        console.log(this.state.answers.sativa)
    }

};



export default StrainId;