import React from "react";
import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import NoSelected from "./NoSelected";
import SideBar from "./SideBar";

const JournalScreen = () => {

const {active} =   useSelector(state => state.notes); 
  return (
    <div className="journal__main-content ">
      <SideBar />
      <main>
      {
        (active) ? <NoteScreen /> : <NoSelected/>
      }
      </main>
    </div>
  );
};

export default JournalScreen;
