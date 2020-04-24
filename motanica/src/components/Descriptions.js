    import React from "react";
    import '../App.css'
    import axios from "axios"
    import SearchResults from "./SearchResults";

    class Descriptions extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            couchlock : "",
            search :false
        }
        this.submitButton = this.submitButton.bind(this);
        this.IndaInfo = this.IndaInfo.bind(this);
        }

    async indaCall(){
        const hiddenApi = process.env.REACT_APP_MOTANICA_API_KEY;
        console.log(hiddenApi)
        try{
        let getData = await axios.get(`https://strainapi.evanbusse.com/${hiddenApi}/strains/search/race/indica`)
        

        this.setState({couchlock: getData.data})
        console.log(this.state.couchlock);
        console.log(getData);
    }
        catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.indaCall();
    }
    nullInda() {
        if (this.state.couchlock === null || this.state.couchlock === undefined){
            return "Not found";
        } else {
             let indaStats = this.state.couchlock.map((response,index)=>{
            return (
        <div id = {index}>
        <h3 id = {index} > {response.name} </h3>  
        <h3 id = {index} > {response.race} </h3>  
         </div> )}); 
            return indaStats;
        }
    }

                IndaInfo(e){
                    e.preventDefault();
                    this.setState({couchlock : e.target.value})
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
                                <input type="text" value = {this.state.couchlock} onChange = {this.IndaInfo}/>
                                <input type="submit" />
                            </form>
                        <div>
                        {/* <SearchResults/> */}
                        {this.state.search ? (<SearchResults id = {this.state.answers} />) : "Answers"}                        
                        {this.nullInda()}

                        </div>
                        </div>
                    )
                    console.log(this.nullInda())
                }
            
            };

    export default Descriptions;