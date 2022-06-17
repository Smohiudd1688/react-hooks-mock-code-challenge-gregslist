import React from "react";
import Search from "./Search";

function Header({items, setSearchedItems, setIsSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search items={items} setSearchedItems={setSearchedItems} setIsSearch={setIsSearch} />
    </header>
  );
}

export default Header;
