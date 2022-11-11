function Navtabs({ list, handlePageChange, currentPage }) {

    

  return (
    
      <ul className="nav nav-tabs">
        {list.map((navItem) => {
          return (
            <li key={navItem} className="nav-item">
              <a
                href={`#${navItem}`}
                onClick={() => handlePageChange(navItem)}
                className={
                  currentPage === navItem ? "nav-link active" : "nav-link"
                }
              >
                {navItem}
              </a>
            </li>
          );
        })}
      </ul>
    
  );
}

export default Navtabs;
