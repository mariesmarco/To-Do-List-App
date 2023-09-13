import React from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

export default App;

function App() {

    const [items, setItems] = React.useState([]);

    function addItem(inputText) {
        setItems(preItems => {
            return (
                [...preItems, inputText]
            )
        })
    }

    function deleteItem(id) {
        setItems(preItems => {
            return preItems.filter(
                (item, index) => {
                    return index !== id;
                }
            )
        })
    }
    return (
        <div className="container">
            <Heading />
            <InputArea onAdd={addItem} />
            <ul>
                {items.map((toDoItem, index) => (
                    <ToDoItem
                        key={index}
                        id={index}
                        text={toDoItem}
                        onChecked={deleteItem}
                    />
                ))}
            </ul>
        </div>
    )
}