import React from "react";
import { useState } from "react";
export const Tour = ({ tours,deleteTours}) => {
  const {id,image, name, info, price } = tours;
  //Readmore toggle
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="col">
      <img src={image} alt="Foto viaje" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          {readmore ? info : `${info.substring(0, 150)}...`}
          <button className="btn btn-text" onClick={() => setReadmore(!readmore)}>
            {readmore ? "Show less" : "Read More"}
          </button>
        </p>
        <h3 className="card-text">
          <strong>Price:</strong>
          {price}
        </h3>
      </div>
      <div className="card-item">
        <button className="btn btn-danger" onClick={()=>deleteTours(id)}>Delete Tour</button>
      </div>
    </div>
  );
};
