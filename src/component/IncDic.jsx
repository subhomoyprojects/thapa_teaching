import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function IncDic(props) {
  const [value, setValue] = useState(0);
  const handler = (e) => {
    setValue(e.target.value);
  };
  const increment = () => {
    setValue(parseInt(value + 1));
  };
  const decrement = () => {
    if (value > 0) {
      setValue(parseInt(value - 1));
    }
  };

  return (
    <>
      <div className="card">
        <TextField
          id="outlined-basic"
          label="Put a Value"
          variant="outlined"
          value={value}
          onChange={handler}
        />
        <Button variant="outlined" type="button" onClick={increment}>
          <AddIcon />
        </Button>
        <Button variant="outlined" type="button" onClick={decrement}>
          <RemoveIcon />
        </Button>
      </div>
    </>
  );
}

export default IncDic;
