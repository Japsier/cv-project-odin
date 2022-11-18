import React, {Component} from "react";

class General extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }
    }
    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleChangelastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }


    render() {
        return(
            <div>
                <form>
                    <label htmlFor="firstNameInput">First Name</label>
                    <input 
                        onChange={this.handleChangeFirstName}
                        value={this.state.firstName}
                        type="text"
                        id="firstNameInput"
                    />

                    <label htmlFor="lastNameInput">Last Name</label>
                    <input 
                        onChange={this.handleChangelastName}
                        value={this.state.lastName}
                        type="text"
                        id="lastNameInput"
                    />

                    <label htmlFor="emailInput">E-mail</label>
                    <input 
                        onChange={this.handleChangeEmail}
                        value={this.state.email}
                        type="email"
                        id="emailInput"
                    />

                    <label htmlFor="phoneInput">Phone Number</label>
                    <input 
                        onChange={this.handleChangePhone}
                        value={this.state.phone}
                        type="tel"
                        id="phoneInput"
                    />
                    <button type="submit">Submit Information</button>
                        
                </form>
            </div>
        )
    }
}

export default General