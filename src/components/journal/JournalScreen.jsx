import React from "react";
import NoteScreen from "../notes/NoteScreen";
import SideBar from "./SideBar";

const JournalScreen = () => {
  return (
    <div className="journal__main-content ">
      <SideBar />
      <main>
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
