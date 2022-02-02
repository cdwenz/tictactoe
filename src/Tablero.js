import { useEffect, useState } from "react";
import "./tablero.css";

export default function Tablero() {
  
  const [turn, setTurn] = useState("X");

  const reset = () => {
    for (let i = 1; i < 9; i++) {
      document.getElementById(`box${i}`).className = "box";
    }
    setTurn("X");
  };
  const result = (winner) => {
    const numBox = winner.slice(-1);
    const getBox = (value) => {
      return document.getElementById(`box${value}`).className;
    };
    
    switch (numBox) {
      case "1":
        if (
          (getBox("2") === turn && getBox("3") === turn) ||
          (getBox("5") === turn && getBox("9") === turn) ||
          (getBox("4") === turn && getBox("7") === turn)
        )
          return true;
        break;
      case "2":
        if (
          (getBox("1") === turn && getBox("3") === turn) ||
          (getBox("5") === turn && getBox("8") === turn)
        )
          return true;
        break;
      case "3":
        if (
          (getBox("1") === turn && getBox("2") === turn) ||
          (getBox("5") === turn && getBox("7") === turn) ||
          (getBox("6") === turn && getBox("9") === turn)
        )
          return true;
        break;
      case "4":
        if (
          (getBox("5") === turn && getBox("6") === turn) ||
          (getBox("1") === turn && getBox("7") === turn)
        )
          return true;
        break;
      case "5":
        if (
          (getBox("1") === turn && getBox("9") === turn) ||
          (getBox("2") === turn && getBox("8") === turn) ||
          (getBox("3") === turn && getBox("7") === turn) ||
          (getBox("4") === turn && getBox("6") === turn)
        )
          return true;
        break;
      case "6":
        if (
          (getBox("3") === turn && getBox("9") === turn) ||
          (getBox("4") === turn && getBox("5") === turn)
        )
          return true;
        break;
      case "7":
        if (
          (getBox("1") === turn && getBox("4") === turn) ||
          (getBox("3") === turn && getBox("5") === turn) ||
          (getBox("8") === turn && getBox("9") === turn)
        )
          return true;
        break;
      case "8":
        if (
          (getBox("2") === turn && getBox("5") === turn) ||
          (getBox("7") === turn && getBox("9") === turn)
        )
          return true;
        break;
      case "9":
        if (
          (getBox("3") === turn && getBox("6") === turn) ||
          (getBox("7") === turn && getBox("8") === turn) ||
          (getBox("1") === turn && getBox("5") === turn)
        )
          return true;
        break;
    }   
    return false;
  };

  const onClicked = (box) => {
      if (document.getElementById(box).className === "box") {
          document.getElementById(box).className = turn;
          setTurn(turn === "X" ? "O" : "X");
        }
      setTimeout(() => {
          if(result(box)){
            alert(`${turn} wins!`);
            reset();
          }
        }, 100);
  };


  return (
    <div className="container">
      <div>Turno de: {turn}</div>
      <div className="table">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (box) {
          return (
            <div
              key={box}
              className="box"
              id={`box${box}`}
              onClick={() => onClicked(`box${box}`)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
