import React from "react";
import SideBar from "./SideBar";

const JournalScreen = () => {
  return (
    <div 
    className="journal__main-content ">

      <SideBar/>

      <main>
        <h4> LIST OF NOTES</h4>
      </main>
    </div>
  );
};

export default JournalScreen;
