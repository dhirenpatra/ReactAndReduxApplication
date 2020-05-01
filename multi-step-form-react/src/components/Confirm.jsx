import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List , ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.continue();
    }

    back = e => {
        e.preventDefault();
        this.props.back();
    }

    render() {
        const { values : {
            firstName,middleName,lastName,email,phoneNumber,occupation,bio,city,country
            }
        }  = this.props;
        //phoneNumber,bio,city,country
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "User Details Confirmation"/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstName }/>
                        <ListItem 
                            primaryText="Middle Name"
                            secondaryText={ middleName }/>
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }/>
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }/>
                        <ListItem 
                            primaryText="Phone Number"
                            secondaryText={ phoneNumber }/>
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }/>
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={ bio }/>
                        <ListItem 
                            primaryText="City"
                            secondaryText={ city }/>
                        <ListItem 
                            primaryText="Country"
                            secondaryText={ country }/>
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm and Continue"
                        style={styles.button}
                        primary={true}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        style={styles.button}
                        primary={false}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        margin : 15
    }
}  

export default Confirm
