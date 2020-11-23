import React from "react";

import products from "../data/products";

export default (props) => {
  function getProductsListItem() {
    return products.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.name} - R${prod.price}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Repetição</h2>
      <ul>{getProductsListItem()}</ul>
    </div>
  );
};
