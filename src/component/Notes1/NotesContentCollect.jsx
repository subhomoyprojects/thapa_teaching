import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function NotesContentCollect(props) {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setData((olddata) => {
      return {
        ...olddata,
        [name]: value,
      };
    });
  };

  const addValue = () => {
    props.addValuePass(data);
    setData({
      title: "",
      description: "",
    });
  };

  return (
    <Card className="text-area">
      <CardContent>
        <input
          type="text"
          placeholder="Heading"
          name="title"
          value={data.title}
          onChange={handelChange}
        />
        <textarea
          placeholder="Put Message"
          name="description"
          value={data.description}
          onChange={handelChange}
        ></textarea>
        <Button variant="contained" onClick={addValue}>
          <AddIcon /> Addition
        </Button>
      </CardContent>
    </Card>
  );
}

export default NotesContentCollect;
