import React, { useEffect, useState } from "react";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import './style.css'
import { Tour } from "./components/Tour";
import Loading from "./components/Loading";
function App() {
  const url = `https://course-api.com/react-tours-project`;
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  //Delete tours
  const deleteTours=(id)=>{
    const newTour=tours.filter((tour)=>tour.id!==id);
    setTours(newTour);
  }
  //Get Api date
  const getTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  //Changue Api
  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="cards">
      {tours.map((tours) => {
        return <Tour tours={tours} key={tours.id} deleteTours={deleteTours}/>;
      })}
    </div>
  );
}

export default App;
