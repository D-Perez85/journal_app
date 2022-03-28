import React from "react";

const JournalEntry = () => {

  return (
    <div className="journal__entry pointer">
    
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: url("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg")
          }}
        ></div>
   
      <div className="journal__entry-body">
        <p className="journal__entry-title">title</p>
        <p className="journal__entry-content">body</p>
      </div>

      <div className="journal__date-box">
        <span>date</span>
        <h4>day</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
