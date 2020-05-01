import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Success"/>
                    <h3> Thanks For your submission </h3>
                    <p> You will receive a confirmation mail shortly </p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
