import React from "react";

function BrokerItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> ${price} </p>
    </div>
  );
}
export default BrokerItem;
