import React, { useState, useEffect } from "react";
import "./App.css";
import NasaImages from "./components/NasaImages";
import NasaFooter from "./components/NasaFooter";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [explanation, setExplanation] = useState("");

  //useEffect
  useEffect(() => {
    //axios
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=g2jo6na4Gfe8IcnK5eOv2yNpqYfwmNQg2pQp9BoA&date=2012-03-14`)
      .then(response => {
        const title = response.data.title;
        const date = response.data.date;
        const explanation = response.data.explanation;
        const img = response.data.hdurl;

        console.log(response.data);
        setTitle(title);
        setDate(date);
        setExplanation(explanation);
        setImg(img);
      })
      .catch(error => {
        console.log("Cant find what you're looking for", error);
      });
  }, [title, date, img, explanation]);

  return (
    <div className="App">
      <h1>Nasa Photo of The Day</h1>
      {/* <NasaHeader /> */}
      <NasaImages title= {title} image= {img} date= {date} explanation= {explanation} />
      <NasaFooter />
    </div>
  );
}

export default App;
