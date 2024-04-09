import React from "react"
import { API_GITHUB_LINK } from "../utils/constants"

class ContactClass extends React.Component{
    constructor(props){
        super(props)
        // all state variables. this.state is reserved
        this.state={
            count:0,
            url: "Default"
        }
    }

    async componentDidMount(){
        const data = await fetch(API_GITHUB_LINK+this.props.username)
        const json = await data.json()
        this.setState({
            url: json?.html_url
        })
    }

    
    render(){
        // let mail = "akshayan027@gmail.com"
        // let number = "7339286386"
        return (
            <div className="contact">
                <h1>Mail: {this.props.mail} {"(added from class-based component)"}</h1>
                <h1>Number: {this.props.number} {"(added from class-based component)"}</h1>
                <h1>{this.state.count}</h1>
                <h1>GitHub URL: {this.state.url}</h1>
                {/* NEVER DO LIKE THIS*/}
                {/* <button onClick={()=>{
                    this.state.count=this.state.count+1
                }}>Increment</button> */}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment</button>
            </div>
        )
    }
}

export default ContactClass