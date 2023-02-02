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

  handleChangeSchoolName = (e) => {
    this.setState({
      educationalExp: {
        schoolName: e.target.value,
        titleOfStudy: this.state.educationalExp.titleOfStudy,
        dateOfStudy: this.state.educationalExp.dateOfStudy,
      }
    });
  }

  handleChangeTitleOfStudy = (e) => {
    this.setState({
      educationalExp: {
        schoolName: this.state.educationalExp.schoolName,
        titleOfStudy: e.target.value,
        dateOfStudy: this.state.educationalExp.dateOfStudy,
      }
    });
  }

  handleChangeDateOfStudy = (e) => {
    this.setState({
      educationalExp: {
        schoolName: this.state.educationalExp.schoolName,
        titleOfStudy: this.state.educationalExp.titleOfStudy,
        dateOfStudy: e.target.value,
      }
    });
  }

  handleChangeCompanyName = (e) => {
    this.setState({
      practicalExp: {
        companyName: e.target.value,
        positionTitle: this.state.practicalExp.positionTitle,
        mainTasks: this.state.practicalExp.mainTasks,
        dateFrom: this.state.practicalExp.dateFrom,
        dateUntil: this.state.practicalExp.dateUntil,
      }
    });
  }

  handleChangePositionTitle = (e) => {
    this.setState({
      practicalExp: {
        companyName: this.state.practicalExp.companyName,
        positionTitle: e.target.value,
        mainTasks: this.state.practicalExp.mainTasks,
        dateFrom: this.state.practicalExp.dateFrom,
        dateUntil: this.state.practicalExp.dateUntil,
      }
    });
  }

  handleChangeMainTasks = (e) => {
    this.setState({
      practicalExp: {
        companyName: this.state.practicalExp.companyName,
        positionTitle: this.state.practicalExp.positionTitle,
        mainTasks: e.target.value,
        dateFrom: this.state.practicalExp.dateFrom,
        dateUntil: this.state.practicalExp.dateUntil,
      }
    });
  }

  handleChangeDateFrom = (e) => {
    this.setState({
      practicalExp: {
        companyName: this.state.practicalExp.companyName,
        positionTitle: this.state.practicalExp.positionTitle,
        mainTasks: this.state.practicalExp.mainTasks,
        dateFrom: e.target.value,
        dateUntil: this.state.practicalExp.dateUntil,
      }
    });
  }

  handleChangeDateUntil = (e) => {
    this.setState({
      practicalExp: {
        companyName: this.state.practicalExp.companyName,
        positionTitle: this.state.practicalExp.positionTitle,
        mainTasks: this.state.practicalExp.mainTasks,
        dateFrom: this.state.practicalExp.dateFrom,
        dateUntil: e.target.value,
      }
    });
  }

  render() {

    return (
      <div>
        <CVForm handleChangeName={this.handleChangeName}
                handleChangeEmail={this.handleChangeEmail}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                handleChangeSchoolName={this.handleChangeSchoolName}
                handleChangeTitleOfStudy={this.handleChangeTitleOfStudy}
                handleChangeDateOfStudy={this.handleChangeDateOfStudy}
                handleChangeCompanyName={this.handleChangeCompanyName}
                handleChangePositionTitle={this.handleChangePositionTitle}
                handleChangeMainTasks={this.handleChangeMainTasks}
                handleChangeDateFrom={this.handleChangeDateFrom}
                handleChangeDateUntil={this.handleChangeDateUntil}/>
      </div>
    )
  }
}

export default App;
