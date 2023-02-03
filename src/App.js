import React from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import uniqid from "uniqid";
import './styles/App.css'

class App extends React.Component {
  constructor() {
    super();

    this.educationalExperience = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      id: uniqid('e-'),
    };
    this.practicalExperience = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      dateFrom: '',
      dateUntil: '',
      id: uniqid('p-'),
    };

    this.state = {
      generalInfo: {
        name: '',
        email: '',
        phoneNumber: '',
      },
      educationalExperiences: [
        {
          ...this.educationalExperience
        }
      ],
      practicalExperiences: [
        {
          ...this.practicalExperience
        }
      ],
      editing: true,
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

  handleChangeSchoolName = (e, educationalExperience) => {
    this.setState({
      educationalExperiences: this.state.educationalExperiences.map(experience => {
        if (experience === educationalExperience) {
          experience.schoolName = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  handleChangeTitleOfStudy = (e, educationalExperience) => {
    this.setState({
      educationalExperiences: this.state.educationalExperiences.map(experience => {
        if (experience === educationalExperience) {
          experience.titleOfStudy= e.target.value;
          return experience;
        }
        return experience;
      }),

    });
  }

  handleChangeDateOfStudy = (e, educationalExperience) => {
    this.setState({
      educationalExperiences: this.state.educationalExperiences.map(experience => {
        if (experience === educationalExperience) {
          experience.dateOfStudy = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  handleChangeCompanyName = (e, practicalExperience) => {
    this.setState({
      practicalExperiences: this.state.practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.companyName = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  handleChangePositionTitle = (e, practicalExperience) => {
    this.setState({
      practicalExperiences: this.state.practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.positionTitle = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  handleChangeMainTasks = (e, practicalExperience) => {
    this.setState({
      practicalExperiences: this.state.practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.mainTasks = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  handleChangeDateFrom = (e, practicalExperience) => {
    this.setState({
      practicalExperiences: this.state.practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.dateFrom = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  handleChangeDateUntil = (e, practicalExperience) => {
    this.setState({
      practicalExperiences: this.state.practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.dateUntil = e.target.value;
          return experience;
        }
        return experience;
      }),
    });
  }

  addEducationalExp = () => {
    this.setState({
      educationalExperiences: [...this.state.educationalExperiences, {...this.educationalExperience, id: uniqid('e-')}]
    })
  } 

  addPracticalExp = () => {
    this.setState({
      practicalExperiences: [...this.state.practicalExperiences, {...this.practicalExperience, id: uniqid('p-')}]
    })
  } 

  deleteEducationalExp = (educationalExperience) => {
    this.setState({
      educationalExperiences: this.state.educationalExperiences.filter((experience) => experience !== educationalExperience)
    });
  }

  deletePracticalExp = (practicalExperience) => {
    this.setState({
      practicalExperiences: this.state.practicalExperiences.filter((experience) => experience !== practicalExperience)
    });
  }

  render() {
    if (this.state.editing) {
      return (
        <div id="App-application">
          <CVForm generalInfo={this.state.generalInfo}
                  educationalExperiences={this.state.educationalExperiences}
                  practicalExperiences={this.state.practicalExperiences}
                  addEducationalExp={this.addEducationalExp}
                  addPracticalExp={this.addPracticalExp}
                  deleteEducationalExp={this.deleteEducationalExp}
                  deletePracticalExp={this.deletePracticalExp}

                  handleChangeName={this.handleChangeName}
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
          <button onClick={() => this.setState({editing: !this.state.editing})}>Submit</button>
        </div>
      )
    }

    return (
      <div>
        <div id="App-preview-header">
          <h1>Preview</h1>
          <button onClick={() => this.setState({editing: !this.state.editing})}>Edit</button>
        </div>
        <div id="App-preview">
          <CVPreview generalInfo={this.state.generalInfo}
                    educationalExperiences={this.state.educationalExperiences}
                    practicalExperiences={this.state.practicalExperiences}/>
        </div>
      </div>
    )

  }
}

export default App;
