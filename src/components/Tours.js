import React from "react";
function Tours() {
  return (
    <div className="card col col-md-6 col-lg-6 p-0 m-auto">
      <img
        src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">title</h2>
        <p className="card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          perferendis?
        </p>
      </div>
      <button className='btn btn-outline-danger w-50 m-auto mb-3'>Delete Tour</button>
    </div>
  );
}

export default Tours;
