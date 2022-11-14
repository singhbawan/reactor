import { useEffect, useState } from "react";
import "./Minesweep.css";
import icon from "./assets/naval-mine.png";

function Minesweep() {
  const [field, setField] = useState([[]]);
  const [resetGame, setResetGame] = useState(false);
  useEffect(() => {
    let initialfield = Array(9)
      .fill(null)
      .map(() =>
        Array(9)
          .fill(null)
          .map(() => ({ isBomb: false, isOpen: false, bombs: 0 }))
      );

    for (let index = 0; index < 10; index++) {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      initialfield[x][y].isBomb = true;
    }

    console.log("Board reset");
    setField(initialfield);
  }, [resetGame]);

  function handleClick(e) {
    let id = e.target.dataset.id;
    let x = [...field];
    
    x[id[0]][id[1]].isOpen = true;
    setField(x);
    if (x[id[0]][id[1]].isBomb) {
      console.log("function to show all");
      console.log("show reset game button");
      alert("Game Over");
      setResetGame(!resetGame);
      return;
    }

    checkAdjacent(id);
  }

  function checkAdjacent(id) {
    let idToCheck = id;
    let k = parseInt(id[0]);
    let l = parseInt(id[1]);
    let x = [...field];


for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {

        if (k+i<0 || l+j<0 || k+i>(x.length-1)|| l+j>(x.length-1)) {
            return;
        }
        
        if (x[k+i][l+j].isBomb) {
            x[idToCheck[0]][idToCheck[1]].bombs++;
            setField(x);
        }

    }
    
}


    // if (k > 0) {
    //   k--;
    // } else if (l > 0) {
    //   l--;
    // } else {
    //   return;
    // }
    // console.log(idToCheck);

    // if (x[k][l].isOpen) {
    //   return;
    // }

    // if (x[k][l].isBomb) {
    //   console.log("bomb found");
    //   x[idToCheck[0]][idToCheck[1]].bombs++;
    //   setField(x);
      
    //   return;
    // } else {
    //   x[k][l].isOpen = true;
    //   setField(x);
    // }

    // for (let i = 0; i < 3; i++) {
    //   switch (i) {
    //     case 0:

    //       break;
    //     case 1:
    //         if (k > 0) {
    //             k--;
    //           }

    //       break;
    //     case 2:
    //       if (k < x.length - 1) {
    //         k=k+2;
    //       }
    //       break;

    //     default:
    //       break;
    //   }

    //   if (i === 1) {
    //     k--;
    //     if (k < 0) {
    //       return;
    //     }
    //   } else if (i === 2) {
    //     k = k + 2;
    //     if (k > x.length) {
    //       return;
    //     }
    //   }
    //   for (let j = 0; j < 2; j++) {
    //     if (i === 1) {
    //       l--;
    //       if (l < 0) {
    //         return;
    //       }
    //     } else if (i === 2) {
    //       l = l + 2;
    //       if (l > x[0].length) {
    //         return;
    //       }
    //     }
    //     console.log(`checked for bomb at ${k}${l}`);
    //     if (x[k][l].isBomb) {
    //       console.log("bomb found");
    //       x[idToCheck[0]][idToCheck[1]].bombs++;

    //       return;
    //     } else {
    //       x[k][l].isOpen = true;
    //       // checkAdjacent(id);
    //     }
    //   }
    // }
  }

  return (
    <div className="App">
      {field.map((e, idx) => {
        return (
          <div key={`${idx}`}>
            {e.map((el, idxx) => {
              return (
                <div
                  data-id={`${idx}${idxx}`}
                  onClick={handleClick}
                  className={`cover ${el.isOpen ? "open" : "close"}`}
                  key={`${idx}${idxx}`}
                >
                  {el.isOpen ? (
                    el.isBomb ? (
                      <img alt="mine" src={icon}></img>
                    ) : (
                      <div>{el.bombs}</div>
                    )
                  ) :  null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Minesweep;

{
  /* <a target="_blank" href="https://icons8.com/icon/UUMsdwzV72zt/naval-mine">Naval Mine</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */
}
