import React from "react";

class GeneralInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleChangeName,
            handleChangeEmail, 
            handleChangePhoneNumber,
            generalInfo} = this.props;

    return (
      <div>
        <label htmlFor="nameInput">Name:</label>
        <input onChange={handleChangeName}
               type="text"
               value={generalInfo.name}
               id="nameInput"
        />
        <label htmlFor="emailInput">Email:</label>
        <input onChange={handleChangeEmail}
               type="text"
               value={generalInfo.email}
               id="emailInput"
        />
        <label htmlFor="phoneNumberInput">Phone Number:</label>
        <input onChange={handleChangePhoneNumber}
               type="text"
               value={generalInfo.phoneNumber}
               id="phoneNumberInput"
        />
      </div>
    );
  }
}

export default GeneralInfo;
