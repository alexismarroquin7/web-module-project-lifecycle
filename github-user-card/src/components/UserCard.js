import React from "react"
import Followers from "./Followers"
import {
    Typography,
    Grid,
    withStyles,
    Card,
    CardActionArea,
    CardContent
} from "@material-ui/core"

const useStyles = theme => ({
    cardContainer: {
        marginTop:"2rem",
        width:"100%"
    },
    card: {
        width:"30%",
        border:"1px solid #242424",
        padding:"2%",
        display:"flex",
        flexFlow:"row wrap",
        justifyContent:"center"
    },
    userImage: {
        width:"200px"
    }
})

class UserCard extends React.Component {

    render(){

        const {classes} = this.props;

        return (
        <div>
        {this.props.user &&
        <Grid 
        className={classes.cardContainer}
        container
        direction="column"
        alignItems="center"
        justify="center"
        >
            <Card className={classes.card}>
            <CardActionArea>
                <img className={classes.userImage} alt={this.props.user.login} src={this.props.user.avatar_url} />
            </CardActionArea>
            <CardContent>
                <Typography variant="h5">{this.props.user.name}</Typography>
                <Typography variant="h5">Username: {this.props.user.login}</Typography>
                <Typography variant="h5">{this.props.user.html_url}</Typography>
                <Typography variant="body1">Location: {this.props.user.location}</Typography>
                <Typography variant="body1">Bio: {this.props.user.bio}</Typography>
                <Typography variant="body1">Followers: {this.props.user.followers}</Typography>
                <Typography variant="body1">Following: {this.props.user.following}</Typography>
            </CardContent>
            </Card>
        </Grid>}
        {
            this.props.followers &&
            this.props.followers.map(follower => {
                return <Followers key={follower.login} follower={follower} />
            })
        }
        </div>
        );
    };
}

export default withStyles(useStyles)(UserCard);