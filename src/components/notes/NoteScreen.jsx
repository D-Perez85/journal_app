import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          name="title"
          className="notes__title-input"
        />
        <textarea
          placeholder="what happend today"
          className="notes__text-area">
        </textarea>
 
          <div className="notes__image">
            {/* <img src="" alt="vista"></img> */}
            <h4>IMAGE</h4>
          </div>
      </div>
      <button className="btn btn-danger">
        DELETE
      </button>
    </div>
  );
};
export default NoteScreen;
