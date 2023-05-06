import React, { useState, useEffect } from "react";

function UseEffectHooks(props) {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${Count}`;
  });

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCount(Count + 1);
        }}
      >
        Use State {Count}
      </button>
    </>
  );
}

export default UseEffectHooks;
