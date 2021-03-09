import React from "react"

class Followers extends React.Component {
    componentDidMount(){
        // console.log("Followers: props:", this.props.follower)
        // console.log("Followers: props:", this.props.follower.login)
    }
    
    render(){
        return(
        
        <div>
            <h2>{this.props.follower.login}</h2>
            <h2>{this.props.follower.html_url}</h2>
            <img alt={this.props.follower.login} src={this.props.follower.avatar_url} />
        </div>
        )
    }
}

export default Followers;