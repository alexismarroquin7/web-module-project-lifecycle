import React from 'react';
import Form from "./components/Form"
import UserCard from "./components/UserCard"  
import axios from "axios"
import {withStyles, Grid, Typography} from "@material-ui/core"

const useStyles = theme => ({
  root: {
    fontFamily: "roboto, sans-serif"
  }
})

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
    console.log("App: Component Updated")
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
    
    const {classes} = this.props;

    return (
    <div className={classes.root}>
      <Grid
      direction="column"
      align="center"
      >
      
        <Form searchUser={this.searchUser} userText={this.state.userText}/>
        {
          this.state.users === {}
          ? <h1>loading...</h1>
          : <UserCard user={this.state.user}/>
        }
        {
          this.state.followers === []
          ? <h1>loading...</h1>
          : <UserCard followers={this.state.followers}/>
        }
        {
          this.state.followers.length === 0 && 
          <div>
          <h2>{this.state.user.login} doesn't have followers yet...</h2>
          <p>Try searching an account with followers</p>
          </div>
        }
      </Grid>
    </div>
    );
  }
}

export default withStyles(useStyles)(App);
