import React from 'react';
import Form from "./components/Form"
import Card from "./components/Card"  
import axios from "axios" 

class App extends React.Component {

  state = {
    userText:"alexismarroquin7",
    user: {},
    followers: []
  }

  componentDidMount(){
    console.log("App: Component Mounted")
    axios
    .get(`https://api.github.com/users/${this.state.userText}`)
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios
    .get(`https://api.github.com/users/${this.state.userText}/followers`)
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.userText !== this.state.userText){
      axios
      .get(`https://api.github.com/users/${this.state.userText}`)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
      axios
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  searchUser = text => {
    console.log("App: text:", text)
    this.setState({
      userText: text
    })
  }

  render(){
    return (
    <div className="App">

      <Form searchUser={this.searchUser} userText={this.state.userText}/>
      {
        this.state.users === {}
        ? <h1>loading...</h1>
        : <Card user={this.state.user}/>
      }
      {
        this.state.followers === []
        ? <h1>loading...</h1>
        : <Card followers={this.state.followers}/>
      }
      {this.state.followers.length === 0 && <h2>No followers yet...</h2>}
    </div>
    );
  }
}

export default App;
