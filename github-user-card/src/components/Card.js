import React from "react"
import Followers from "./Followers"

class Card extends React.Component {

    componentDidUpdate(){
        console.log("Card: props:", this.props.user);
    }
    
    render(){
        return (
        <div>
        
        {this.props.user &&
        <div>
            <h2>User Card</h2>
            <div>
                <img alt={this.props.user.login} src={this.props.user.avatar_url} />
            </div>
            <p>{this.props.user.login}</p>
            <p>{this.props.user.name}</p>
            <p>{this.props.user.html_url}</p>
            <p>Location: {this.props.user.location}</p>
            <p>Bio: {this.props.user.bio}</p>
            <p>Followers: {this.props.user.followers}</p>
            <p>Following: {this.props.user.following}</p>
        </div>}
        {
            this.props.followers && 
            this.props.followers.map(follower => {
                return <Followers follower={follower} />
            })
        }
        </div>
        );
    };
}

export default Card;