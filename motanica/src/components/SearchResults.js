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
        // console.log(hiddenApi)
        try{
        let getEffect = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/data/effects/10`)
        this.setState({effects : getEffect.data})
    console.log(getEffect.data.negative)
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
            <div className = "container-fluid">
                
                <p className ="col-sm-1"> {this.state.effects.positive}</p>
                <p> {this.state.effects.negative} </p>
                <p> {this.state.raceId} </p> 
                <p> {this.state.race} </p>

            {console.log(this.state.effects.positive)}
            {console.log(this.state.effects.negative)}
            </div>
            )
        }
    }

    export default SearchResults;