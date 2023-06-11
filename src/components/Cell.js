import React from "react";

function Cell({ id, cellValue = " ", handleSelect }) {
  return (
    <button
      disabled={!!cellValue.trim()}
      onClick={() => {
        handleSelect(id);
      }}
      style={{
        width: "30%",
        height: "30%",
      }}
    >
      {cellValue}
    </button>
  );
}

export default Cell;
