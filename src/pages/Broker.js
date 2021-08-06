import React from "react";
import { BrokerName } from "../helpers/BrokerName";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function BrokerMenu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">My Brokers</h1>
      <div className="menuList">
        {BrokerName.map((menuItem, key) => {
          return (
            <BrokerName
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BrokerMenu;
