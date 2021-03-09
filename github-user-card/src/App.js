import React from 'react';
import Card from "./components/Card"  
import axios from "axios" 

class App extends React.Component {

  state = {
    user: {}
  }

  componentDidMount(){
    console.log("App: Component Mounted")
    axios
    .get(`https://api.github.com/users/alexismarroquin7`)
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
    <div className="App">
      {console.log(this.state.user)}
      {
        this.state.users === {}
        ? <h1>loading...</h1>
        : <Card user={this.state.user}/>
      }
    </div>
    );
  }
}

export default App;
