import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import NotesAppBar from "./NotesAppBar";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from '../../actions/notes';

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const dispatch = useDispatch(); 

  const activeId = useRef(note.id);
  /**Set & reset status of active note */
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

/**Refresh of actual Note + Save in Firestore */
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () =>{
    dispatch(startDeleting(id));
  }
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
          name="body"
          placeholder="what happend today"
          className="notes__text-area"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className="notes__image">
            <img
              src={note.url} alt="vista"
            ></img>
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>DELETE</button>
    </div>
  );
};
export default NoteScreen;
