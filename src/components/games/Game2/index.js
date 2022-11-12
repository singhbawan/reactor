import { useEffect, useState } from "react";
import "./Game2.css";

function Game2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rhymes, setrhymes] = useState([]);

 useEffect (()=>{
      fetch(
        `https://api.datamuse.com/words?max=10&rel_rhy=${searchTerm}`
      )
      .then((response)=>response.json())
      .then((resp)=>setrhymes(resp));
},[searchTerm]);

  function handleInput(e) {
    setSearchTerm(e.target.value);
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
        
      </form>
      {rhymes.length ? null : (
        <div className="message1">No results to show search a valid term!!</div>
      )}
      <ul className="list1">
        {rhymes.map((word, idx) => {
          return (
            <li key={word.word + idx} className="listitem1">
              {word.word}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Game2;
