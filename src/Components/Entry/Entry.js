import React from "react";
import "./Entry.css";

const Entry = props => {
  const { list, handleDelete, type } = props;
  return (
    <div>
      {list.map((item, index) => (
        <li className="list" key={index} index={index}>
          {item.description} -- {item.amount} &euro; "{item.time}"
          <button className="listBtn" onClick={() => handleDelete(type, index)}>
            delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Entry;
