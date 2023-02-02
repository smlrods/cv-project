import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      educationalExp: {
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
      },
      practicalExp: {
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        dateFrom: '',
        dateUntil: '',
      } 
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default App;
