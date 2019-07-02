
class Car {
  constructor(owner = "Unknown Owner", name = "Unknown Name") {
    this.owner = owner;
    this.name = name;
  }

  drive() {
    console.log(
      `The ${this.name} car owned by ${this.owner} drives on the road`
    );
  }

  getOwner() {
    return this.owner;
  }
}

class CarSpesification extends Car {
  constructor(owner, name, type, color, year, price) {
    super(owner, name);
    this.type = type;
    this.color = color;
    this.year = year;
    this.price = price
}

  display() {
    console.log(
      `this car is belong to ${this.owner}, the model is ${
        this.name
      }, this.type ${this.type},beautiful ${this.color}, made in ${this.year}`
    );
  }
}

const myCar = new CarSpesification("Rafli", "Toyota Yaris","city car", "red", "2018");

console.log(myCar);

 myCar.drive();
 myCar.display()
console.log(myCar.getOwner());



class CityCar extends Car {
  constructor({ owner, name, color, price }) {
    super(owner, name);
    this.color = color;
    this.price = price;
  }

  getColor() {
    return this.color;
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(this.price);

    return formattedPrice;
  }
}
const coolCar = new CityCar({
  owner: "Rafli",
  name: "Toyota Yaris",
  color: "Red",
  price: "20000", // USD
});

console.log(coolCar);

coolCar.drive();

console.log(coolCar.getColor());

console.log(coolCar.getPrice());
 