import React, { useState } from "react";
import Form3Extender from "./Form3Extender";

function Form3(props) {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);
  const handel = (e) => {
    setList(e.target.value);
  };
  const commonFunction = () => {
    setItem((oldValue) => {
      return [...oldValue, list];
    });
    setList("");
  };
  const keyPress = (e) => {
    if (e.key === "Enter") {
      commonFunction();
    }
  };
  const itemAdd = () => {
    commonFunction();
  };
  const deleteItem = (id) => {
    setItem((oldValue) => {
      return oldValue.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="container">
        <div className="card-layout">
          <h1>Todo List</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Put List name"
              value={list}
              onChange={handel}
              onKeyDown={keyPress}
            />
            <button onClick={itemAdd} type="button">
              + click
            </button>
          </div>
          <ul>
            {item.map((itemlist, index) => {
              return (
                <Form3Extender
                  key={index}
                  id={index}
                  showItem={itemlist}
                  deleteItem={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Form3;
