import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NotesMiddleLoop(props) {
  const deleteNote = () => {
    props.itemDelete(props.id);
  };
  return (
    <Grid2 xs={12} md={6} lg={3}>
      <Card className="card-item">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={deleteNote}>
            Delete
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid2>
  );
}

export default NotesMiddleLoop;
