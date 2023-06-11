export const findValue = (id) => {
  return id % 2 === 0 ? "X" : "O";
};

export const isGameEnds = (tableData) => {
  const tableIds = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  //check all rows
  for (let i = 0; i < 3; i++) {
    let xCount = 0,
      oCount = 0;
    for (let j = 0; j < 3; j++) {
      const tableId = tableIds[i][j];
      switch (tableData[tableId].cellValue) {
        case "X":
          xCount++;
          break;
        case "O":
          oCount++;
          break;
      }
    }
    if (xCount === 3 || oCount === 3) return true;
  }

  //check all cols
  for (let j = 0; j < 3; j++) {
    let xCount = 0,
      oCount = 0;
    for (let i = 0; i < 3; i++) {
      const tableId = tableIds[i][j];
      switch (tableData[tableId].cellValue) {
        case "X":
          xCount++;
          break;
        case "O":
          oCount++;
          break;
      }
    }
    if (xCount === 3 || oCount === 3) return true;
  }

  //check diagonals
  const diagonals = [
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const diagonal of diagonals) {
    let xCount = 0,
      oCount = 0;
    for (const tableId of diagonal) {
      switch (tableData[tableId].cellValue) {
        case "X":
          xCount++;
          break;
        case "O":
          oCount++;
          break;
      }
    }
    if (xCount === 3 || oCount === 3) return true;
  }
  return false;
};
