const car = {
    name : "Tesla",
    model : "X",
};

function showCarInfo() {
    console.log(this.name, this.model);
}

let boundShowCarInfo = showCarInfo.bind(car);
boundShowCarInfo();
