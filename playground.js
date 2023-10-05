
class Car {
  constructor(brand, year) {

    this.brand = brand;
    this.year = parseFloat(year);
  }
  getAge() {
    let date = new Date();
    const getYear = date.getFullYear();
    const age = getYear - this.year; 
    return age;
  }
  print() {
    return `This ${this.brand} is ${this.getAge()} years old`
  }


}

const audi = new Car('Audi', '2014')
const bmw = new Car('bmw', '2024')
const toyota = new Car('toyot', '1999')

console.log(toyota.print())