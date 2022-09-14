import { useState } from "react";
import { Trash } from "phosphor-react";
import "./Item.css";

interface todoItem {
  text: string;
  onDeleteItem: Function;
  onCompleteItem: Function;
}

export function Item({ text, onDeleteItem, onCompleteItem }: todoItem) {
  const [state, setState] = useState("Todo");

  const textColor = {
    color: state == "Todo" ? "#C3423F" : "#178C54",
  };

  function handeDone(event: React.ChangeEvent<HTMLInputElement>) {
    let checked = event.target.checked;
    setState(checked ? "Done" : "Todo");
    onCompleteItem(checked);
  }

  function handleDeleteItem() {
    let checked = state == "Done";
    onDeleteItem(text, checked);
  }

  return (
    <div className="Item">
      <div className="State">
        <div>
          <input onChange={handeDone} type="checkbox" />
          <b className="StateText" style={textColor}>
            {state}
          </b>
        </div>
        <button className="deleteButton" onClick={handleDeleteItem}>
          <Trash color="#EDE7D9" size={24} />
        </button>
      </div>
      <label className="todoText">{text}</label>
    </div>
  );
}
