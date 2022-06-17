import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(items => setItems(items));
  }, []);



  return (
    <div className="app">
      <Header items={items} setSearchedItems={setSearchedItems} setIsSearch={setIsSearch} />
      <ListingsContainer 
              items={isSearch ? searchedItems : items} 
              setItems={setItems} 
            />
    </div>
  );
}

export default App;
