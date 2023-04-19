import React, { useState } from "react";
import "./NotesMiddle.css";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import NotesMiddleLoop from "./NotesMiddleLoop";
import NotesContentCollect from "./NotesContentCollect";

function NotesMiddle(props) {
  const [addItem, setAddItem] = useState([]);
  const passNote = (content) => {
    setAddItem((oldData) => {
      return [...oldData, content];
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Container maxWidth="lg" className="common-gap min-height-80">
        <NotesContentCollect passNote={passNote} />
        <Grid2 container spacing={2}>
          {addItem.map((item, index) => {
            return (
              <NotesMiddleLoop
                key={index}
                id={index}
                title={item.title}
                description={item.description}
                deleteItem={onDelete}
              />
            );
          })}
        </Grid2>
      </Container>
    </>
  );
}

export default NotesMiddle;
