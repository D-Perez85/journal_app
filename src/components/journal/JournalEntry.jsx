import React from "react";
import moment from "moment";
const JournalEntry = ({ id, date, title, url, body }) => {
  const noteDate = moment(date);

  return (
    <div className="journal__entry pointer">
    
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
          }}
        ></div>
   
      <div className="journal__entry-body">
      <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__date-box">
      <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
