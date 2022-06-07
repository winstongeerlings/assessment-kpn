import '../App.css';
import {useState} from "react";

function ObjectInput(props) {
    const {objectKey, objectValue, index, onUpdate, onRemove} = props;
    const [inputKey, setInputKey] = useState(objectKey);
    const [inputValue, setInputValue] = useState(objectValue);

    return (
        <div className='d-flex mb-2'>
            <input className='mr-1' type='text' value={inputKey} onChange={e => {setInputKey(e.target.value); onUpdate(index, e.target.value, inputValue)}} />
            <input className='mr-1' type='text' value={inputValue} onChange={e => {setInputValue(e.target.value); onUpdate(index, inputKey, e.target.value)}} />
            <button onClick={(e) => onRemove(index)}>-</button>
        </div>
    );
}

export default ObjectInput;
