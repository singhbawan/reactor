import { useState } from "react";
import "./Game2.css";

function Game2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rhymes, setrhymes] = useState([]);

  function handleInput(e) {
    setSearchTerm(e.target.value);
  }
 async function handleClick(e) {
    e.preventDefault();
    let response = await fetch(`https://api.datamuse.com/words?max=10&rel_rhy=${searchTerm}`);
    let resp = await response.json();
    setrhymes(resp);
  
  }

  return (
    <div className="canvas">
      <br /> Find a Ryme:{" "}
      <form>
      <input
        type="text"
        name="searchTerm"
        placeholder="coffee"
        onChange={handleInput}
      />
      <button className="btn1" onClick={handleClick}>Search</button>
      </form>
      {rhymes.length?null:(<div className="message1">No results to show search a valid term!!</div>)}
      <ul className="list1">
      {rhymes.map((word,idx)=>{return(
        <li key={word.word+idx} className="listitem1">{word.word}</li>
      )})}
      </ul>
    </div>
  );
}

export default Game2;
