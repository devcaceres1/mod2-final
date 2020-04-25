    import React from "react";
    import '../App.css'
    import axios from "axios"

    class StrainEffectsResults extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            raceInfo : [],
            race : this.props.id,
            effects : "",
            name : ""
        }
    }  

    async effects(){
        const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
        try{
        let getEffect = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/data/effects/${this.props.id}`)
        this.setState({effects : getEffect.data, name : getEffect.data.name})


        }
        catch(error) {
            console.log(error)
        }
    }
        componentDidMount(){
        this.effects();
    }

    render(){
            return (
            <div className = "container">
                
                <p> Positive Effects : {this.state.effects.positive} </p>
                <p> Negative Effects : {this.state.effects.negative} </p>


            </div>
            )
        }
    }

    export default StrainEffectsResults;