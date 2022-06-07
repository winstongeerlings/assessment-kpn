import {useEffect, useState} from "react";
import ObjectInput from "../components/object-inputs";
import {createListItem} from "../utils/list-item-creator";

function VarListComponent(props) {

    const {initialVars, onUpdate} = props;

    useEffect(() => {
        onUpdate(varList);
    });

    const [varList, setVarList] = useState(Object.keys(initialVars)
        .map((key, index) => createListItem(key, index, Object.values(initialVars))));

    const updateVars = (index, newKey, newValue) => {
        varList[index] = {
            ...varList[index],
            key: newKey,
            value: newValue,
        };
        setVarList([...varList]);
    };

    const removeVar = (index) => {
        varList.splice(index, 1);
        setVarList([...varList]);
    };

    const addVar = () => {
        setVarList([...varList, {id: Math.floor(Math.random() * 1000), key: '', value: ''}]);
    };

    const renderedVars = varList.map((listItem, index) => {
        return <ObjectInput key={listItem.id} index={index} objectKey={listItem.key} objectValue={listItem.value} onUpdate={updateVars} onRemove={removeVar}/>
    });

    return (
        <>
            <h4>Vars:</h4>
            {renderedVars}
            <button onClick={addVar}>+</button>
        </>
    );
}

export default VarListComponent;
