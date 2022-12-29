import React, { useState } from "react";
import { Container, Screen, Previos, Current, Button } from "./styled";

function Calculator() {
  const [current, setCurrent] = useState("");
  const [previos, setPrevios] = useState("");
  const [operation, setOperation] = useState("");
  const appendValue = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;

    setCurrent(current + value);
  };

  const handleDelete = () => {
    setCurrent(String(current).slice(0, -1));
  };
  const handleClearAll = () => {
    setCurrent("");
    setPrevios("");
    setOperation("");
  };
  const compute = () => {
    let result;
    let previosValue = parseFloat(previos);
    let currentValue = parseFloat(current);
    switch (operation) {
      case "+":
        result = previosValue + currentValue;
        break;
      case "-":
        result = previosValue - currentValue;
        break;
      case "/":
        result = previosValue / currentValue;
        break;
      case "*":
        result = previosValue * currentValue;
        break;
      default:
        return;
    }
    return result;
  };
  const chooseOperation = (e) => {
    if (current == "") return;
    if (previos !== "") {
      let value = compute();
      setPrevios(value);
    } else {
      setPrevios(current);
    }
    setCurrent("");
    setOperation(e.target.getAttribute("data"));
  };

  const equals = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrevios("");
    setOperation("");
  };
  return (
    <Container>
      <Screen>
        <Previos>
          {previos}
          {operation}
        </Previos>
        <Current>{current}</Current>
      </Screen>
      <Button gridSpan={2} control onClick={handleClearAll}>
        AC
      </Button>
      <Button onClick={handleDelete} control>
        DEL
      </Button>
      <Button operation data={"/"} onClick={chooseOperation}>
        /
      </Button>
      <Button data={"7"} onClick={appendValue}>
        7
      </Button>
      <Button data={"8"} onClick={appendValue}>
        8
      </Button>
      <Button data={"9"} onClick={appendValue}>
        9
      </Button>
      <Button operation data={"*"} onClick={chooseOperation}>
        *
      </Button>
      <Button data={"4"} onClick={appendValue}>
        4
      </Button>
      <Button data={"5"} onClick={appendValue}>
        5
      </Button>
      <Button data={"6"} onClick={appendValue}>
        6
      </Button>
      <Button operation data={"+"} onClick={chooseOperation}>
        +
      </Button>
      <Button data={"1"} onClick={appendValue}>
        1
      </Button>
      <Button data={"2"} onClick={appendValue}>
        2
      </Button>
      <Button data={"3"} onClick={appendValue}>
        3
      </Button>
      <Button operation data={"-"} onClick={chooseOperation}>
        -
      </Button>
      <Button data={"."} onClick={appendValue} control>
        .
      </Button>
      <Button data={"0"} onClick={appendValue}>
        0
      </Button>
      <Button gridSpan={2} operation data={"="} onClick={equals}>
        =
      </Button>
    </Container>
  );
}

export default Calculator;
