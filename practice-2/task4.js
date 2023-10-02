function findUser(initialObject) {
    return Object.keys(initialObject).filter(name => initialObject[name].age > 18 && initialObject[name].city === "London");
}
