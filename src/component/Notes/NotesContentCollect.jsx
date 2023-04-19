import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function NotesContentCollect(props) {
  const [content, setContent] = useState({
    title: "",
    description: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setContent((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  const addContent = () => {
    props.passNote(content);
    setContent({ title: "", description: "" });
  };
  return (
    <Card className="text-area">
      <CardContent>
        <input
          type="text"
          placeholder="Heading"
          name="title"
          value={content.title}
          onChange={handelChange}
        />
        <textarea
          placeholder="Put Message"
          name="description"
          value={content.description}
          onChange={handelChange}
        ></textarea>
        <Button variant="contained" onClick={addContent}>
          <AddIcon /> Addition
        </Button>
      </CardContent>
    </Card>
  );
}

export default NotesContentCollect;
