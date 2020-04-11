function speed(miles) {
    console.log(miles)
}



function Car(model, year) {
    this.carModel = model;
    this.year = year
}

Car.prototype.speed = speed;
var bmw = new Car("n2345", 2006)

bmw.speed("350")