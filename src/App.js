import React, {Component} from "react";
import "./App.css";
import NasaImages from "./components/NasaImages";
import NasaHeader from "./components/NasaHeader";
import DateInput from "./components/DatePicker";
import moment from "moment";

 
class App extends Component {
  state = {
    date: moment().toDate(),
    photo: ""
  };

  changeDate = dateFromInput => {
    this.setState({ date: dateFromInput });
    this.getPhoto(this.formatDate(dateFromInput));
  };

  formatDate = moment => {
    let year = moment.year();
    let month = moment.month() + 1;
    let day = moment.date();
    return `${year}-${month}-${day}`;
    }
render(){
  return (
    <div className="App">
      <NasaHeader />
      <h1>Nasa Photo of The Day</h1>
      <DateInput changeDate={this.changeData} date= {this.state.date} />
      <NasaImages date={this.state.date}/>

    </div>
  );
  }
}

export default App;
