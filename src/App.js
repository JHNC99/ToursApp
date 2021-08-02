import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
function App() {
  const url=`https://course-api.com/react-tours-project`
  const [loading,setLoading]=useState(true);
  const[tours,setTours]=useState([]);
  
  //Get Api date
  const getTours=async ()=>{
   
    try{
      const response=await fetch(url);
      const tours= await response.json();
      setLoading(false);
      setTours(tours);
    }
    catch(error){
      setLoading(true);
      console.log(error);
    }

  }
  //Changue Api
  useEffect(()=>{
    getTours();
  },[])
 
  if(loading){
    return(
      <Loading/>
    )
  }
  return (
    <div className="container">
      <h2 className="text-center">Tours</h2>
      <div className="row">
        <Tours />
        <Tours />
      </div>
    </div>
  );
}

export default App;
