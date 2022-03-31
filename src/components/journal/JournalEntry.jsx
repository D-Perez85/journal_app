import React from "react";
import moment from "moment";
import { activeNote } from "../../actions/notes";
import { useDispatch } from "react-redux";


const JournalEntry = ({ id, date, title, url, body }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch(); 

  const handleEntryClick = () =>{
    dispatch(activeNote(id,{
      date, title, url, body
    }))
  }
  
  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}
    >
    
    {
      url && 
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      }
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
