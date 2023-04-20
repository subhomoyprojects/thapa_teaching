import React, { useState } from "react";
import "./NotesMiddle.css";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import NotesMiddleLoop from "./NotesMiddleLoop";
import NotesContentCollect from "./NotesContentCollect";

function NotesMiddle(props) {
  const [notesLoop, setNotesLoop] = useState([]);
  const addValuePass = (data) => {
    setNotesLoop((oldData) => {
      return [...oldData, data];
    });
  };
  const deleteItem = (id) => {
    setNotesLoop((old) => {
      return old.filter((val, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Container maxWidth="lg" className="common-gap min-height-80">
        <NotesContentCollect addValuePass={addValuePass} />
        <Grid2 container spacing={2}>
          {notesLoop.map((val, index) => {
            return (
              <NotesMiddleLoop
                key={index}
                id={index}
                title={val.title}
                description={val.description}
                itemDelete={deleteItem}
              />
            );
          })}
        </Grid2>
      </Container>
    </>
  );
}

export default NotesMiddle;
