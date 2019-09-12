import React from "react";

const NasaCard = (props => {
const {key, title, date, description, url} = props
console.log(props);
  return (
    <div className="nasaCards" key={key}>
     <h2>{title}</h2> 
     <h3>Date:{date}</h3> 
       <img className="nasa-image"
        alt="NASA pic of the day" src={url}/>
      <p className="description">{description}</p> 
    </div>
  );
});
export default NasaCard;