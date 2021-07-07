import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = props => (
  <div>
    <DatePicker 
    selected={props.date} 
    onChange={props.changeDate} 
    />
  </div>
);

export default DateInput;
