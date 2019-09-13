import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import NasaFooter from "./NasaFooter"
import axios from "axios";



function NasaImages() {
    const [nasa, setNasa] = useState([]);
    //useEffect
    useEffect(() => {
      //axios
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=UmypbIRqUUHGReEW0IEuAownZim0SnYPzwydkIWr`)
        .then(response => {
          const pod = response.data;
        setNasa(pod)
        console.log("nasa photos",pod);
        })
        .catch(error => {
          console.log("Cant find what you're looking for", error);
        });
    }, []);
  
return (
    <div className = "nasaImages">
    <NasaCard 
            key= {nasa.key}
            title= {nasa.title} 
            url= {nasa.hdurl} 
            date= {nasa.date} 
            description= {nasa.explanation} 
            /> 
            <NasaFooter copyright={nasa.copyright} />
    </div>
    )
}
export default NasaImages;