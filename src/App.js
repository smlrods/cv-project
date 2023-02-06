import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import uniqid from "uniqid";
import './styles/App.css'

function App() {
    const wrapper = React.createRef();
    const componentRef = useRef();

    const educationalExperience = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
      id: uniqid('e-'),
    };

    const practicalExperience = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      dateFrom: '',
      dateUntil: '',
      id: uniqid('p-'),
    };

    const [generalInfo, setGeneralInfo] = useState({
      name: '',
      email: '',
      phoneNumber: '',
    });
    const [educationalExperiences, setEducationalExperiences] = useState([
      {
        ...educationalExperience
      }
    ]);
    const [practicalExperiences, setPracticalExperiences] = useState([
      {
        ...practicalExperience
      }
    ]);

    const [editing, setEditing] = useState(true);

  const handleChangeName = (e) => {
    setGeneralInfo({
        name: e.target.value,
        email: generalInfo.email,
        phoneNumber: generalInfo.phoneNumber,
    });
  }

  const handleChangeEmail = (e) => {
    setGeneralInfo({
      name: generalInfo.name,
      email: e.target.value,
      phoneNumber: generalInfo.phoneNumber,
    });
  }

  const handleChangePhoneNumber = (e) => {
    setGeneralInfo({
      name: generalInfo.name,
      email: generalInfo.email,
      phoneNumber: e.target.value,
    });
  }

  const handleChangeSchoolName = (e, educationalExperience) => {
    setEducationalExperiences(
      educationalExperiences.map(experience => {
        if (experience === educationalExperience) {
          experience.schoolName = e.target.value;
          return experience;
        }
        return experience;
      })
    );
  }

  const handleChangeTitleOfStudy = (e, educationalExperience) => {
    setEducationalExperiences(
      educationalExperiences.map(experience => {
        if (experience === educationalExperience) {
          experience.titleOfStudy= e.target.value;
          return experience;
        }
        return experience;
      })
    );
  }

  const handleChangeDateOfStudy = (e, educationalExperience) => {
    setEducationalExperiences(
      educationalExperiences.map(experience => {
        if (experience === educationalExperience) {
          experience.dateOfStudy = e.target.value;
          return experience;
        }
        return experience;
      })
    )
  }

  const handleChangeCompanyName = (e, practicalExperience) => {
    setPracticalExperiences(
      practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.companyName = e.target.value;
          return experience;
        }
        return experience;
      })
    );
  }

  const handleChangePositionTitle = (e, practicalExperience) => {
    setPracticalExperiences(
      practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.positionTitle = e.target.value;
          return experience;
        }
        return experience;
      })
    )
  }

  const handleChangeMainTasks = (e, practicalExperience) => {
    setPracticalExperiences(
      practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.mainTasks = e.target.value;
          return experience;
        }
        return experience;
      })
    )
  }

  const handleChangeDateFrom = (e, practicalExperience) => {
    setPracticalExperiences(
      practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.dateFrom = e.target.value;
          return experience;
        }
        return experience;
      })
    )
  }

  const handleChangeDateUntil = (e, practicalExperience) => {
    setPracticalExperiences(
      practicalExperiences.map(experience => {
        if (experience === practicalExperience) {
          experience.dateUntil = e.target.value;
          return experience;
        }
        return experience;
      })
    );
  }

  const addEducationalExp = () => {
    setEducationalExperiences(
      [...educationalExperiences, {...educationalExperience, id: uniqid('e-')}]
    );
  } 

  const addPracticalExp = () => {
    setPracticalExperiences(
      [...practicalExperiences, {...practicalExperience, id: uniqid('p-')}]
    );
  } 

  const deleteEducationalExp = (educationalExperience) => {
    setEducationalExperiences(
      educationalExperiences.filter((experience) => experience !== educationalExperience)
    );
  }

  const deletePracticalExp = (practicalExperience) => {
    setPracticalExperiences(
      practicalExperiences.filter((experience) => experience !== practicalExperience)
    );
  }

  if (editing) {
    return (
      <div id="App-application" ref={wrapper}>
        <CVForm generalInfo={generalInfo}
                educationalExperiences={educationalExperiences}
                practicalExperiences={practicalExperiences}

                addEducationalExp={addEducationalExp}
                addPracticalExp={addPracticalExp}
                deleteEducationalExp={deleteEducationalExp}
                deletePracticalExp={deletePracticalExp}

                handleChangeName={handleChangeName}
                handleChangeEmail={handleChangeEmail}
                handleChangePhoneNumber={handleChangePhoneNumber}
                handleChangeSchoolName={handleChangeSchoolName}
                handleChangeTitleOfStudy={handleChangeTitleOfStudy}
                handleChangeDateOfStudy={handleChangeDateOfStudy}
                handleChangeCompanyName={handleChangeCompanyName}
                handleChangePositionTitle={handleChangePositionTitle}
                handleChangeMainTasks={handleChangeMainTasks}
                handleChangeDateFrom={handleChangeDateFrom}
                handleChangeDateUntil={handleChangeDateUntil}/>
        <button onClick={() => setEditing(!editing)}>Submit</button>
      </div>
    )
  }

  return (
    <div ref={wrapper}>
      <div id="App-preview-header">
        <h1>Preview</h1>
        <button onClick={() => setEditing(!editing)}>Edit</button>
        <ReactToPrint 
          trigger={() => {
          return <button>Print</button>
        }}
        content={() => componentRef.current}
      />
      </div>
      <div id="App-preview">
        <CVPreview ref={componentRef} generalInfo={generalInfo}
                  educationalExperiences={educationalExperiences}
                  practicalExperiences={practicalExperiences}/>
      </div>
    </div>
  )
}

export default App;
