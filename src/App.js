import React, { Component } from "react"
import Education from "./Components/Education"
import Work from "./Components/Work"
import General from "./Components/General"

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <General />
        <Education />
        <h1>Work Experience:</h1>
        <Work />
      </div>
    );
  }

}

export default App;
