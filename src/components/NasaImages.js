import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import NasaFooter from "./NasaFooter"
import axios from "axios";
import {data} from "./Data";


function NasaImages() {
    const [nasa, setNasa] = useState([]);
    const [date, setDate] = useState(nasa);
    //useEffect
    useEffect(() => {
      //axios
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=UmypbIRqUUHGReEW0IEuAownZim0SnYPzwydkIWr&date=${date}`)
        .then(response => {
          const pod = response.data;
        setNasa(pod)
        console.log("nasa photos",pod);
        })
        .catch(error => {
          console.log("Cant find what you're looking for", error);
        });
    }, [date]);
  
    const updateDate = event =>{
      setDate(event.target.value);
    };
return (
    <div className = "nasaImages">
    <NasaCard 
            key= {nasa.key}
            title= {nasa.title} 
            url= {nasa.hdurl} 
            date= {nasa.date} 
            description= {nasa.explanation} 
            fnc={updateDate}
            /> 
            <NasaFooter copyright={nasa.copyright} />
    </div>
    )
}
export default NasaImages;