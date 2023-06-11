import React, { useState, useRef } from "react";
import Cell from "./Cell";
import {findValue,isGameEnds} from "./util";
function Table() {
  const [tableData, setTableData] = useState(
    Array(9)
      .fill()
      .map((_, id) => ({ id, cellValue: " " }))
  );
  const turn = useRef(0);
  const isGameEnd = useRef(false);


  const handleSelect = (id) => {
    const updatedTableData = tableData.map((cellData, idx) => ({
      ...cellData,
      cellValue: idx === id ? findValue(turn.current) : cellData.cellValue,
    }));
    if (isGameEnds(updatedTableData)) {
      isGameEnd.current = true;
    }
    setTableData(updatedTableData);
    if (!isGameEnd.current) {
      turn.current++;
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "150px",
        height: "150px",
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        marginTop: "200px",
      }}
    >
      <>
        The current user is {findValue(turn.current)}{" "}
        {isGameEnd.current && <>and he Won the game</>}
      </>
      <br />
      {turn.current === 9 && <>GAME OVER</>}
      {Array(9)
        .fill(0)
        .map((_, id) => (
          <Cell key={id} {...tableData[id]} handleSelect={handleSelect} />
        ))}
    </div>
  );
}

export default Table;
