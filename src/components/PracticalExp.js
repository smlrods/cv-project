import React from "react";

class PracticalExp extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleChangeCompanyName,
            handleChangePositionTitle,
            handleChangeMainTasks,
            handleChangeDateFrom,
            handleChangeDateUntil,
            experience} = this.props;

    return (
      <div>
        <label htmlFor="companyNameInput">Company name</label>
        <input onChange={(e) => handleChangeCompanyName(e, experience)}
               type="text"
               id="companyNameInput"
        />
        <label htmlFor="positionTitleInput">Position title</label>
        <input onChange={(e) => handleChangePositionTitle(e, experience)}
               type="text"
               id="positionTitleInput"
        />
        <label htmlFor="mainTasksInput">Main Tasks</label>
        <input onChange={(e) => handleChangeMainTasks(e, experience)}
               type="text"
               id="mainTasksInput"
        />
        <label htmlFor="dateFromInput">Date From</label>
        <input onChange={(e) => handleChangeDateFrom(e, experience)}
               type="month"
               id="dateFromInput"
        />
        <label htmlFor="dateUntilInput">Date Until</label>
        <input onChange={(e) => handleChangeDateUntil(e, experience)}
               type="month"
               id="dateUntilInput"
        />
      </div>
    );
  }
}

export default PracticalExp;
