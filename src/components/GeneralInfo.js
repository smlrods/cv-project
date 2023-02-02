import React from "react";

class GeneralInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleChangeName, handleChangeEmail, handleChangePhoneNumber} = this.props;

    return (
      <div>
        <label htmlFor="nameInput">Name</label>
        <input onChange={handleChangeName}
               type="text"
               id="nameInput"
        />
        <label htmlFor="emailInput">Email</label>
        <input onChange={handleChangeEmail}
               type="text"
               id="emailInput"
        />
        <label htmlFor="phoneNumberInput">Phone Number</label>
        <input onChange={handleChangePhoneNumber}
               type="text"
               id="phoneNumberInput"
        />
      </div>
    );
  }
}

export default GeneralInfo;
