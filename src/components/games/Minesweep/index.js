import { useState } from "react";
import "./Minesweep.css"
import icon from "./assets/naval-mine.png";

function Minesweep() {
  let initialfield = Array(9)
    .fill(null)
    .map(() =>
      Array(9)
        .fill(null)
        .map(() => ({ isBomb: false, isOpen: false, x:1 }))
    );

  for (let index = 0; index < 10; index++) {
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    initialfield[x][y].isBomb = true;
  }

  const [field, setField] = useState(initialfield);

function handleClick(e) {
    let id = e.target.dataset.id;
    let x = [...field]
    x[id[0]][id[1]].isOpen = true;
    setField(x);
}

  return <div className="App">
    {field.map((e,idx)=>{  
        return <div key={ `${idx}`}>
            {e.map(
                (el,idxx)=>{
                    return <div data-id={`${idx}${idxx}`} onClick={handleClick} className={`cover ${el.isOpen? 'open':'close'}`}  key={`${idxx}${idx}`}>
                      {el.isBomb? <img src={icon}></img>:null}  
                    </div>
                }
            )}
            </div>})}
  </div>;
}

export default Minesweep;


{/* <a target="_blank" href="https://icons8.com/icon/UUMsdwzV72zt/naval-mine">Naval Mine</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}