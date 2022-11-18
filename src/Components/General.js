import React, {Component} from "react";

class General extends Component {
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
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

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            submitted: true
        })
    }

    editForm = () => {
        this.setState({
            submitted: false
        })
    }


    render() {
        return(
            <div className="generalInfo">
                {(this.state.submitted === false)
                ?   <form onSubmit={this.onSubmit}>
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
    
                    <label htmlFor="phoneInput">Phone</label>
                    <input 
                        onChange={this.handleChangePhone}
                        value={this.state.phone}
                        type="tel"
                        id="phoneInput"
                    />
                    <button type="submit">Submit Information</button>
                            
                    </form>
                    :  <div className="generalInfoDisplay">
                    <h2 className = "firstNameDisplay">{this.state.firstName}</h2>
                    <h2 className = "lastNameDisplay">{this.state.lastName}</h2>
                    <h2 className = "emailDisplay">{this.state.email}</h2>
                    <h2 className= "phoneDisplay">{this.state.phone}</h2>
                    <button onClick={this.editForm}>Edit Information</button>
                    </div>
                    }
                </div>
            )
    }
}

export default General