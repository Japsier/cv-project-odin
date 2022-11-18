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
      </div>
    );
  }

}

export default App;
