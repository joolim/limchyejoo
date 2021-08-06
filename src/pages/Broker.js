import React from "react";
import { BrokerName } from "../helpers/BrokerName";
import BrokerItem from "../components/BrokerItem";
import "../styles/Broker.css";

function Broker() {
  return (
    <div className="broker">
      <h1 className="brokerTitle">My Brokers</h1>
      <div className="brokerName">
        {BrokerName.map((brokerItem, key) => {
          return (
            <BrokerItem
              key={key}
              image={brokerItem.image}
              name={brokerItem.name}
              price={brokerItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Broker;
