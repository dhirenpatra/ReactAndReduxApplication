import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.continue();
    }

    render() {
        const {values,handleFormChange}  = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "User Personal Details Form"/>
                    <TextField 
                        hintText="Enter First Name"
                        floatingLabelText="First Name"
                        defaultValue={values.firstName}
                        onChange={handleFormChange('firstName')}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Middle Name"
                        floatingLabelText="Middle Name"
                        defaultValue={values.middleName}
                        onChange={handleFormChange('middleName')}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Last Name"
                        floatingLabelText="Last Name"
                        defaultValue={values.lastName}
                        onChange={handleFormChange('lastName')}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter emailid"
                        floatingLabelText="Email ID"
                        defaultValue={values.email}
                        onChange={handleFormChange('email')}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        style={styles.button}
                        primary={true}
                        onClick={this.continue}
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

export default FormUserDetails
