import React from "react"

class Card extends React.Component {

    componentDidUpdate(){
        console.log("Card: props:", this.props.user);
    }
    
    render(){
        return (
        <div>
        <h2>Card</h2>
        <div>
            <img alt={this.props.user.login} src={this.props.user.avatar_url} />
        </div>
        <p>{this.props.user.login}</p>
        <p>{this.props.user.location}</p>
        <p>{this.props.user.bio}</p>
        </div>
        );
    };
}

export default Card;