import "./App.css";
import { useState } from "react";
import Circle from "./circle";
import Backgroundtext from "./Backgroundtext";


function App() {
  const [circlesCoor, setCirclesCoord] = useState([]);
  const [undoCirclesCoor, setundoCirclesCoord] = useState([]);

  function handleClick(e) {
    if (e.target.className !== "App") {
      return;
    }
    let { pageX, pageY } = e;
    let newCircleCoor = [...circlesCoor];
    newCircleCoor.push({ X: pageX, Y: pageY });
    setCirclesCoord(newCircleCoor);
    console.log(pageX, pageY);
  }

  function handleUndo() {
    if (!circlesCoor.length) {
      return;
    }

    setundoCirclesCoord([...undoCirclesCoor, circlesCoor.pop()]);
    setCirclesCoord(circlesCoor);

    // let prevcircleState = [...circlesCoor];
    // let popped = prevcircleState.pop();
    // let prevState = [...undoCirclesCoor];
    // prevState.push(popped);
    // let newState = prevState;
    // setundoCirclesCoord(newState);
    // setCirclesCoord(prevcircleState);
  }

  function handleRedo() {
    if (!undoCirclesCoor.length) {
      return;
    }

    setCirclesCoord([...circlesCoor, undoCirclesCoor.pop()]);
    setundoCirclesCoord(undoCirclesCoor);

    // let prevcircleState = [...undoCirclesCoor];
    // let popped = prevcircleState.pop();
    // let prevState = [...circlesCoor];
    // prevState.push(popped);
    // let newState = prevState;
    // setundoCirclesCoord(prevcircleState);
    // setCirclesCoord(newState);
  }

  function handleClear() {
    

    setCirclesCoord([]);
    setundoCirclesCoord([]);

    // let prevcircleState = [...undoCirclesCoor];
    // let popped = prevcircleState.pop();
    // let prevState = [...circlesCoor];
    // prevState.push(popped);
    // let newState = prevState;
    // setundoCirclesCoord(prevcircleState);
    // setCirclesCoord(newState);
  }

  return (
    <div onClick={handleClick} className="App">
      <button onClick={handleUndo} className="btn">
        Undo
      </button>
      <button onClick={handleRedo} className="btn">
        Redo
      </button>
      <button onClick={handleClear} className="btn">
        Clear
      </button>
      {circlesCoor.length? null : <Backgroundtext />}
      {circlesCoor.map((position, idx) => (
        <Circle key={idx} xCoor={position.X - 12} yCoor={position.Y - 12} />
      ))}
    </div>
  );
}

export default App;
