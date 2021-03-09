import React from "react"

class Form extends React.Component {

    state = {
        text: ""
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchUser(this.state.text)
        this.setState({
            text: ""
        })
    }

    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Enter a GitHub username"
                    value={this.state.text}
                    onChange={this.handleChange}
                    type="text"
                />
                <button 
                    type="submit"
                >Fetch User And Their Followers</button>
            </form>
        </div>
        )
    }
}

export default Form;