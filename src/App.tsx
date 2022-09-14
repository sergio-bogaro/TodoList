import { Plus } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Item } from "./Components/Item";
import { ProgressBar } from "./Components/ProgressBar";

function App() {
  const [itensNumber, setItensNumber] = useState(0);
  const [completedItens, setCompletedItens] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [todoList, setTodoList]: any = useState([]);
  const [itemText, setItemText] = useState("");

  function setTodoItemText(event: ChangeEvent<HTMLInputElement>) {
    setItemText(event.target.value);
  }

  function handleNewItem() {
    const newItensNumber = itensNumber + 1;
    if (itemText != "") {
      setTodoList([...todoList, itemText]);
      setItemText("");
      setItensNumber(newItensNumber);
    }

    const percent = completedItens / newItensNumber;
    handleProgressBar(percent);
  }

  function deleteItem(itemToDelete: string, checked: boolean) {
    const newList = todoList.filter((item: string) => {
      return item != itemToDelete;
    });

    const newItensNumber = itensNumber - 1;
    const newCompletedItens = checked ? completedItens - 1 : completedItens;
    const percent =
      newItensNumber == 0 ? 0 : newCompletedItens / newItensNumber;

    setItensNumber(newItensNumber);
    setCompletedItens(newCompletedItens);
    handleProgressBar(percent);
    setTodoList(newList);
  }

  function handleCompleteItens(checked: boolean) {
    const newCompletedItens = checked ? completedItens + 1 : completedItens - 1;
    setCompletedItens(newCompletedItens);

    const percent = newCompletedItens / itensNumber;
    handleProgressBar(percent);
  }

  function handleProgressBar(percent: number) {
    const progress = Math.round(percent * 100);
    setProgressPercent(progress);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="addItem">
        <input
          type="text"
          className="addText"
          onChange={setTodoItemText}
          value={itemText}
        />
        <button className="addItemButton" onClick={handleNewItem}>
          <Plus />
        </button>
      </div>

      <ProgressBar completed={progressPercent}></ProgressBar>

      <div className="list">
        {todoList.map((item: string) => {
          return (
            <Item
              key={item}
              text={item}
              onDeleteItem={deleteItem}
              onCompleteItem={handleCompleteItens}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}

export default App;
