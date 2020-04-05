import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";
import { BookingForm } from "./actions/index";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import BookingsList from "./bookingsList";

const useAppStyles = makeStyles({
  textfield: {
    marginBottom: "20px",
  },
  mainPage: {
    backgroundColor: "#c789",
    // margin:"10px",
    padding: "10px",
    width: "100%",
  },
});

function SimpleSelect({ value, handleChange }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gas Connection type</FormLabel>
        <RadioGroup
          aria-label="gas connection type"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Domestic"
            control={<Radio />}
            label="Domestic"
          />
          <FormControlLabel
            value="corporate"
            control={<Radio />}
            label="corporate"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

function App() {
  const classes = useAppStyles();

  const [gasConnectionName, setGasConnectionName] = useState("");
  const [gasConnectionNumber, setGasConnectionNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      gasConnectionName: gasConnectionName,
      gasConnectionNumber: gasConnectionNumber,
      mobileNumber: mobileNumber,
      connectionType: value,
    };
    dispatch(BookingForm(payload));
    history.push("/list_Of_Bookings");
  };

  return (
    <div className={classes.mainPage}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <h1>Gas Booking System</h1>
          </Grid>
          <Grid container className={classes.textfield}>
            <Grid item md={2}>
              <Typography>Gas Connection Name</Typography>
            </Grid>
            <Grid item md={2}>
              <TextField
                value={gasConnectionName}
                variant="outlined"
                className={classes.textField}
                placeholder="Enter Your connection Name"
                onChange={(e) => setGasConnectionName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.textfield}>
            <Grid item md={2}>
              <Typography>Gas Connection Number</Typography>
            </Grid>
            <Grid item md={2}>
              <TextField
                value={gasConnectionNumber}
                variant="outlined"
                placeholder="Enter Your connection Number"
                onChange={(e) => setGasConnectionNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.textfield}>
            <Grid item md={2}>
              <Typography>Mobile Number</Typography>
            </Grid>
            <Grid item md={2}>
              <TextField
                value={mobileNumber}
                variant="outlined"
                placeholder="Enter Your Mobile Number"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.textfield}>
            <Grid item md={2}>
              <Typography>Gas Connection Type</Typography>
            </Grid>
            <Grid item sm={2}>
              <SimpleSelect value={value} handleChange={handleChange} />
            </Grid>
          </Grid>
          <Grid container className={classes.textfield}>
            <Grid item md={2}></Grid>
            <Grid item md={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth={false}
                className={classes.login}
                type="submit"
              >
                Bookings List
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {/* <BookingsList /> */}
    </div>
  );
}

export default App;
