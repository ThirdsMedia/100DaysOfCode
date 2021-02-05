import React from 'react';

// const FormButton = () => {}

export default function Form() {
  return (
    <div className="FormDiv">
      <h2>Registration/Login Form</h2>
      <p>Name</p>
      <input
        className="Form"
        type="text"
        onChange={console.log("test")}
      />
      <input
        className="Form"
        type="text"
        onChange={console.log("test")}
      />
    </div>
  )
}
