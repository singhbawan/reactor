import "./circles.css";
import { useState } from "react";
import Circle from "./circle";
import Backgroundtext from "./Backgroundtext";
import Modal from "../../modal";

function Game1() {
  const [circlesCoor, setCirclesCoord] = useState([]);
  const [undoCirclesCoor, setundoCirclesCoord] = useState([]);
  const [isModal, setIsModal] = useState(false);
  let modalInfo = {title:"Circles", description:"This game demonstrate the use of useState hook along with conditional rendering"}

  function handleClick(e) {
    if (e.target.className !== "canvas") {
      return;
    }
    let { pageX, pageY } = e;
    setCirclesCoord([...circlesCoor, { X: pageX, Y: pageY }]);
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
  }

  function toggleModal() {
   
    isModal? setIsModal(false) : setIsModal(true);

  }

  return (
    <div onClick={handleClick} className="canvas">
      <button onClick={()=>handleUndo()} className="btn1">
        Undo
      </button>
      <button onClick={()=>handleRedo()} className="btn1">
        Redo
      </button>
      <button onClick={()=>handleClear()} className="btn1">
        Clear
      </button>
      <button onClick={()=>toggleModal()} className="btn1">
        Info
      </button>
      {circlesCoor.length ? null : <Backgroundtext />}
      {isModal ? <Modal toggleModal={toggleModal} modalInfo={modalInfo} /> : null}
      {circlesCoor.map((position, idx) => (
        <Circle key={idx} xCoor={position.X - 10} yCoor={position.Y - 50} />
      ))}
    </div>
  );
}

export default Game1;
