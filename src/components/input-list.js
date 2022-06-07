import {useEffect, useState} from "react";
import ObjectInput from "../components/object-inputs";
import {createListItem} from "../utils/list-item-creator";

function InputListComponent(props) {

    const {initialInputs, onUpdate} = props;

    useEffect(() => {
        onUpdate(inputList);
    });

    const [inputList, setInputList] = useState(Object.keys(initialInputs)
        .map((key, index) => createListItem(key, index, Object.values(initialInputs))));

    const removeInput = (index) => {
        inputList.splice(index, 1);
        setInputList([...inputList]);
    };

    const addInput = () => {
        setInputList([...inputList, {key: '', value: ''}]);
    };

    const updateInputs = (index, newKey, newValue) => {
        inputList[index] = {
            ...inputList[index],
            key: newKey,
            value: newValue,
        };
        setInputList([...inputList]);
    };

    const renderedInputs = inputList.map((listItem, index) => {
        return <ObjectInput key={listItem.id} index={index} objectKey={listItem.key} objectValue={listItem.value} onUpdate={updateInputs} onRemove={removeInput} />
    });

    return (
        <>
            <h4>Vars:</h4>
            {renderedInputs}
            <button onClick={addInput}>+</button>
        </>
    );
}

export default InputListComponent;
