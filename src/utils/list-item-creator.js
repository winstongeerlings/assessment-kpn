export const createListItem = (key, index, valueList) => {
    const value = valueList[index];
    return {
        id: Math.floor(Math.random() * 100000),
        key,
        value,
    }
}