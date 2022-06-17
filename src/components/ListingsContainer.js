import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, setItems}) {
  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter(item => {
      return item.id !== deletedItem.id;
    });

    setItems(updatedItems);
  }

  const renderItems = items.map((item) => {
    return (<ListingCard 
              key={item.id}
              item={item}
              onItemDelete={handleDeleteItem}
            />)
  });

  return (
    <main>
      <ul className="cards">
        {renderItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
