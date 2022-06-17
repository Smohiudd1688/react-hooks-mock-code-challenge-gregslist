import React, {useState} from "react";

function Search({items, setSearchedItems, setIsSearch}) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const searchItems = items.filter((item) => {
      return item.description.toUpperCase().includes(search.toUpperCase());
    });

    if (search === "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }

    setSearchedItems(searchItems);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
