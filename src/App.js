import React from "react";
import "./App.css";
import NasaImages from "./components/NasaImages";
import NasaFooter from "./components/NasaFooter";

function App() {
  return (
    <div className="App">
      <h1>Nasa Photo of The Day</h1>
      {/* <NasaHeader /> */}
      <NasaImages />
      <NasaFooter />
    </div>
  );
}

export default App;
