import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.continue();
    }

    back = e => {
        e.preventDefault();
        this.props.back();
    }

    render() {
        const {values,handleFormChange}  = this.props;
        //phoneNumber,bio,city,country
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "User Professional Details Form"/>
                    <TextField 
                        hintText="Enter Phone Number"
                        floatingLabelText="Phone Number"
                        defaultValue={values.phoneNumber}
                        onChange={handleFormChange('phoneNumber')}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        defaultValue={values.occupation}
                        onChange={handleFormChange('occupation')}
                    />
                    <br />
                    <TextField 
                        hintText="Enter Bio"
                        floatingLabelText="Bio"
                        defaultValue={values.bio}
                        onChange={handleFormChange('bio')}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter City"
                        floatingLabelText="City"
                        defaultValue={values.city}
                        onChange={handleFormChange('city')}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Country"
                        floatingLabelText="Country"
                        defaultValue={values.country}
                        onChange={handleFormChange('country')}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
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

export default FormPersonalDetails
