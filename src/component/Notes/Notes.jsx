import React from "react";
import NotesHeader from "./NotesHeader";
import NotesFooter from "./NotesFooter";
import NotesMiddle from "./NotesMiddle";

function Notes(props) {
  return (
    <>
      <NotesHeader />
      <NotesMiddle />
      <NotesFooter />
    </>
  );
}

export default Notes;
