import React, {Component} from "react";

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            submitted: false,
            schoolName: "",
            titleStudy: "",
            dateStudy: ""
            
        }
    }
    schoolNameChange = (e) => {
        this.setState({
            schoolName: e.target.value
        })
    }
    titleStudyChange = (e) => {
        this.setState({
            titleStudy: e.target.value
        })
    }
    dateStudyChange = (e) => {
        this.setState({
            dateStudy: e.target.value
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
            <div className="educationInfo">
                {(this.state.submitted === false)
                ?   <form onSubmit={this.onSubmit}>
                        <label htmlFor="schoolNameInput">School Name</label>
                        <input 
                            type= "text"
                            onChange={this.schoolNameChange}
                            value={this.state.schoolName}
                            id="schoolNameInput"
                        />

                        <label htmlFor="titleStudyInput">Title of your Study</label>
                        <input 
                            type= "text"
                            onChange={this.titleStudyChange}
                            value={this.state.titleStudy}
                            id="titleStudyInput"
                        />
                        <div className="educationDate">
                            <label htmlFor="dateStudyInput">Date of Study</label>
                            <input 
                                type= "date"
                                onChange={this.dateStudyChange}
                                value={this.state.dateStudy}
                                id="dateStudyInput"
                            />
                        </div>
                        <button type="submit">Submit Information</button>
                    </form>
                :   <div className="educationInfoDisplay">
                        <h2>{this.state.schoolName}</h2>
                        <h2>{this.state.titleStudy}</h2>
                        <h2>{this.state.dateStudy}</h2>
                        <button onClick={this.editForm}>Edit</button>
                    </div>
                }
            </div>
        )
    }

}

export default Education
