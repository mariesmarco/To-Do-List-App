import React from "react";

export default InputArea;

function InputArea(props) {

    const [inputText, setInputText] = React.useState("");

    function handleChange(event) {
        var newInput = event.target.value;
        setInputText(newInput);
    }
    return (
        <div className="input-area">
            <input className="text-input" onChange={handleChange} type="text" name="input-item" id="input-item" value={inputText} />
            <button className="add-button"
                onClick={() => {
                    props.onAdd(inputText);
                    setInputText("");
                }}
            >
                <span className="text-button" >Add</span>
            </button>
        </div>
    )
}