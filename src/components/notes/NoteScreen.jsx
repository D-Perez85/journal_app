import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import NotesAppBar from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;


  const activeId = useRef(note.id);
useEffect (()=>{
  if(note.id !== activeId.current){
    reset(note); 
    activeId.current = note.id
  }
}, [note,reset]); 
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          name="title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="what happend today"
          className="notes__text-area"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
              alt="vista"
            ></img>
          </div>
        )}
      </div>
      <button className="btn btn-danger">DELETE</button>
    </div>
  );
};
export default NoteScreen;
