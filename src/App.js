import React from "react";
import "./App.css";
import NasaImages from "./components/NasaImages";
import NasaHeader from "./components/NasaHeader";
import DatePicker from "./components/DatePicker";

function App() {
  return (
    <div className="App">
      <NasaHeader />
      <h1>Nasa Photo of The Day</h1>
      <DatePicker />
      <NasaImages />

    </div>
  );
}

export default App;
