import React from "react";

const NasaCard = (props) => {

  return (
    <div className="nasaCards">
    <h2>{props.title}</h2>
    <h3>{props.date}</h3>
      <img className="nasa-image"
        alt="NASA pic of the day" src={props.hdurl}/>
      <p className="description">{props.explanation}</p>
    </div>
  );
};
export default NasaCard;
