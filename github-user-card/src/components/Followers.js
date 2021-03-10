import React from "react"
import {withStyles, Card, Grid} from "@material-ui/core"

const useStyles = theme => ({
    root: {
        width:"100%",
        borderRadius: "10px",
        marginTop: "3rem",
        marginBottom: "3rem"
    },
    card: {
        border: "1px solid #242424",
        width:"30%"
    }
})

class Followers extends React.Component {
    componentDidMount(){
        // console.log("Followers: props:", this.props.follower)
        // console.log("Followers: props:", this.props.follower.login)
    }
    
    render(){
        const {classes} = this.props
        return(
        
        <Grid className={classes.root}>
            <Card className={classes.card}>
            <h2>{this.props.follower.login}</h2>
            <h2>{this.props.follower.html_url}</h2>
            <img alt={this.props.follower.login} src={this.props.follower.avatar_url} />
            </Card>
        </Grid>
        )
    }
}

export default withStyles(useStyles)(Followers);