import React, {Component} from "react";

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
            companyName: "",
            positionTitle: "",
            jobDescription: "",
            dateStarted: "",
            dateEnded: ""

        }
    }

    companyNameChange = (e) => {
        this.setState({
            companyName: e.target.value
        })
    }
    positionTitleChange = (e) => {
        this.setState({
            positionTitle: e.target.value
        })
    }
    jobDescriptionChange = (e) => {
        this.setState({
            jobDescription: e.target.value
        })
    }
    dateStartedChange = (e) => {
        this.setState({
            dateStarted: e.target.value
        })
    }
    dateEndedChange = (e) => {
        this.setState({
            dateEnded: e.target.value
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
    removeForm = (e) => {
        e.target.parentNode.parentNode.remove()
    }


    render() {
        return(
            <div className="workInfo">
               {
                (this.state.submitted === false)
                ?   <form onSubmit={this.onSubmit}>
                    <label htmlFor="companyNameInput">Company Name</label>
                    <input
                        onChange={this.companyNameChange}
                        value={this.state.companyName}
                        type="text"
                        id="companyNameInput"
                    />

                    <label htmlFor="positionTitleInput">Position at the company</label>
                    <input
                        onChange={this.positionTitleChange}
                        value={this.state.positionTitle}
                        type="text"
                        id="positionTitleInput"
                    />

                    <label htmlFor="jobDescriptionInput" className="jobDescriptionInput">Describe your role at the company</label>
                    <textarea
                        onChange={this.jobDescriptionChange}
                        value={this.state.jobDescription}
                        rows="5" 
                        cols="33"
                        id="jobDescriptionInput"
                    />

                    <label htmlFor="dateStartedInput">First Day</label>
                    <input
                        onChange={this.dateStartedChange}
                        value={this.state.dateStarted}
                        type="date"
                        id="dateStartedInput"
                    />

                    <label htmlFor="dateEndedInput">Last Day</label>
                    <input
                        onChange={this.dateEndedChange}
                        value={this.state.dateEnded}
                        type="date"
                        id="dateEndedInput"
                    />

                    <button type="submit">Submit Information</button>
                    <button onClick={this.removeForm}>Remove</button>

                    </form>
                :   <div>
                        <h2>{this.state.companyName}</h2>
                        <h2>{this.state.positionTitle}</h2>
                        <h2>{this.state.jobDescription}</h2>
                        <h2>{this.state.dateStarted}</h2>
                        <h2>{this.state.dateEnded}</h2>
                        <button onClick={this.editForm}>Edit</button>
                    </div>
               } 
            </div>
        )
    }
}

export default Work