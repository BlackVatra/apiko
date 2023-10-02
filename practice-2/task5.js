function removeObj(arrayOfObj, keyName, value) {
    return arrayOfObj.filter(obj => obj[keyName] !== value);
}
