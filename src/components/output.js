function OutputComponent(props) {
    const {inputList , varList} = props;

    const generateOutputObject = (_inputList, varList) => {
        return _inputList.reduce((outputObject, item) => {
            let value = item.value;

            if (value.indexOf('$') > -1) {
                const key = value.replace('$', '');
                const _varItem = varList.find((varItem) => varItem.key === key);
                value = _varItem ? _varItem.value : null;
            }

            return { ...outputObject, [item.key]: value};
        }, {});
    };

    return (
        <>
            <h4>Output:</h4>
            <textarea readOnly value={JSON.stringify(generateOutputObject(inputList, varList), null, 2)}/>
        </>
    );
}

export default OutputComponent;
