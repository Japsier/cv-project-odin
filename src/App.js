import React, { Component } from "react"
import Education from "./Components/Education"
import Work from "./Components/Work"
import General from "./Components/General"
import "./Index.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      EducationForms: [],
      WorkForms: []
    }
  }

  addEducation = () => {
    this.setState({
      EducationForms: this.state.EducationForms.concat("1")
    })
    console.log(this.state.EducationForms)
  }

  addWork = () => {
    this.setState({
      WorkForms: this.state.WorkForms.concat("1")
    })
    console.log(this.state.WorkForms)
  }

  render() {
    return (
      <div className="mainDiv">
        <header>CV-Creator</header>
        <h1>General Information</h1>
        <General />

        <h1>Education:</h1>
        {this.state.EducationForms.map(() => {
            return <Education />
        })}
        <button onClick={this.addEducation}>Add Education</button>

        <h1>Work Experience:</h1>
        <div className="educationDisplay">
          {this.state.WorkForms.map( () => {
              return <Work />
          })}
        </div>
        <button onClick={this.addWork}>Add Work Experience</button>

          <footer>Made by Japsir</footer>
      </div>
    );
  }

}

export default App;
