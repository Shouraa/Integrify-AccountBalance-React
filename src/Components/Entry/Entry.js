import React from "react";
import "./Entry.css";

const Entry = props => {
  const { list, handleDelete, type } = props;
  return (
    <div>
      {list.map((item, index) => (
        <li className="list" key={index} index={index}>
          <div>
            <div className="itemName">{item.description}</div>
            <div className="itemAmount">{item.amount} &euro;</div>
            <div className="time">{item.time}</div>
          </div>

          <div className="btn" onClick={() => handleDelete(type, index)}>
            delete
          </div>
        </li>
      ))}
    </div>
  );
};

export default Entry;
