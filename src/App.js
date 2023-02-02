import React from "react";
import CVForm from "./components/CVForm";

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

  handleChangeName = (e) => {
    this.setState({
      generalInfo: {
        name: e.target.value,
        email: this.state.generalInfo.email,
        phoneNumber: this.state.generalInfo.phoneNumber,
      }
    });
  }

  handleChangeEmail = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: e.target.value,
        phoneNumber: this.state.generalInfo.phoneNumber,
      }
    });
  }

  handleChangePhoneNumber = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phoneNumber: e.target.value,
      }
    });
  }

  render() {

    return (
      <div>
        <CVForm handleChangeName={this.handleChangeName}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePhoneNumber={this.handleChangePhoneNumber}/>
      </div>
    )
  }
}

export default App;
