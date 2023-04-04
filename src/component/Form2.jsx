import React, { useState } from "react";

function Form2(props) {
  const [list, setList] = useState();
  const [item, setItem] = useState([]);
  const handel = (e) => {
    setList(e.target.value);
  };
  const itemAdd = () => {
    return setItem((oldValue) => {
      return [...oldValue, list];
    });
  };
  const deleteItem = (e) => {
    e.target.closest("li").remove();
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
              //   value={list}
              onChange={handel}
            />
            <button onClick={itemAdd} type="button">
              + click
            </button>
          </div>
          <ul>
            {item.map((itemlist, index) => {
              return (
                <li key={index} id={index}>
                  {itemlist}
                  <button type="button" onClick={deleteItem}>
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Form2;
