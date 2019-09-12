import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";


function NasaImages() {
    const [nasa, setNasa] = useState([]);
    //useEffect
    useEffect(() => {
      //axios
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=g2jo6na4Gfe8IcnK5eOv2yNpqYfwmNQg2pQp9BoA&date=2012-03-14`)
        .then(response => {
        setNasa(nasa)
        console.log("nasa photos",response.data);
        })
        .catch(error => {
          console.log("Cant find what you're looking for", error);
        });
    }, [nasa]);
  
return (
    <div className = "nasaImages">
            <NasaCard 
            key= {nasa.key}
            title= {nasa.title} 
            url= {nasa.hdurl} 
            date= {nasa.date} 
            description= {nasa.explanation} /> 
    </div>
    
    )  
}
export default NasaImages;