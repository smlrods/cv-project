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
            handleChangeDateUntil} = this.props;

    return (
      <div>
        <label htmlFor="companyNameInput">Company name</label>
        <input onChange={handleChangeCompanyName}
               type="text"
               id="companyNameInput"
        />
        <label htmlFor="positionTitleInput">Position title</label>
        <input onChange={handleChangePositionTitle}
               type="text"
               id="positionTitleInput"
        />
        <label htmlFor="mainTasksInput">Main Tasks</label>
        <input onChange={handleChangeMainTasks}
               type="text"
               id="mainTasksInput"
        />
        <label htmlFor="dateFromInput">Date From</label>
        <input onChange={handleChangeDateFrom}
               type="month"
               id="dateFromInput"
        />
        <label htmlFor="dateUntilInput">Date Until</label>
        <input onChange={handleChangeDateUntil}
               type="month"
               id="dateUntilInput"
        />
      </div>
    );
  }
}

export default PracticalExp;
