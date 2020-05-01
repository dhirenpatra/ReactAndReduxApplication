import React, { Component } from 'react'
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

class UserForm extends Component {

    state = {
        step : 1,
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        occupation:'',
        phoneNumber: '',
        bio: '',
        city: '',
        country: '',
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step : step - 1
        })
    }

    handleFormChange = input => event => {
        this.setState({
            [input] : event.target.value
        })
    }

    render() {
        const {step} = this.state;
        const {firstName,middleName,lastName,email,phoneNumber,occupation,bio,city,country}  = this.state;
        const values = {firstName,middleName,lastName,email,phoneNumber,occupation,bio,city,country};
        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        values={values}
                        handleFormChange = {this.handleFormChange}
                        continue = {this.nextStep} />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        values={values}
                        handleFormChange = {this.handleFormChange}
                        continue = {this.nextStep}
                        back = {this.prevStep}
                    />
                )
            case 3:
                return (
                    <Confirm 
                        values={values}
                        handleFormChange = {this.handleFormChange}
                        continue = {this.nextStep}
                        back = {this.prevStep}
                    />
                )
            case 4:
                return <Success />
            default : return (
                <div>
                    <h2> Case default </h2>
                </div>
            )
        }

        
    }
}

export default UserForm
