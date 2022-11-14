import React, { useState } from "react";

import Home from "./home";
import Game1 from "../games/circlesGame/index";
import Game2 from "../games/Game2/index";
import Game3 from "../games/Minesweep/index";
import Navtabs from "./Navtabs";

function Navbar() {
  const pageList = ["Home", "Circles", "Rhymes", "Minesweep"];
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;

      case "Circles":
        return <Game1 />;

      case "Rhymes":
        return <Game2 />;

      case "Minesweep":
        return <Game3 />;

      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navtabs
        list={pageList}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      {renderPage()}
    </div>
  );
}

export default Navbar;
