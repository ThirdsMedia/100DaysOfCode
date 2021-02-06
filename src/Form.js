import React from 'react';
// You can find all of these components here: https://material-ui.com/getting-started/installation/
// Then go to the side tab to Components or Components API and find all the components you could ever need there. Below is an example
import TextField from '@material-ui/core/TextField';

const FormButton = () => {
  return <button className="FormButton">Submit</button>
}

export default function Form() {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
    <div className="FormDiv">
      <h2>Registration/Login Form</h2>
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

      <FormButton />
    </div>
    </div>
  )
}
