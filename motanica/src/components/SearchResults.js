    import React from "react";
    import '../App.css'
    import axios from "axios"

    class SearchResults extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            raceInfo : [],
            race : this.props.id,
            effects : ""
        }
        console.log(this.props.id)
    }  

    async effects(){
        const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
        try{
        let getEffect = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/data/effects${this.state.answers}`)
        this.setState({effects : getEffect.data})

        console.log(getEffect.data.negative)
        console.log(getEffect.data)

        }
        catch(error) {
            console.log(error)
        }
    }
        componentDidMount(){
        this.effects();
    }

    unDefined() {
        if (this.state.raceInfo === null || this.state.raceInfo === undefined){
    return "Not found";
        } else {
    let race = this.state.raceInfo.map((response,index)=>{

        return (
        <div>
            <h3> {response.name} </h3>  
            <h3> {response.race} </h3> 
        </div> )
        });
        return race;
        }
    }
        // }
    render(){
            return (
            <div className = "container">
                
                <p className ="col-xl-2"> {this.state.effects.positive}</p>
                <p> {this.state.effects.negative} </p>
                <p> {this.state.race} </p> 

            {console.log(this.state.effects.positive)}
            {console.log(this.state.effects.negative)}
            </div>
            )
        }
    }

    export default SearchResults;