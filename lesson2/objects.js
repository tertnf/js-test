// const car = {
//     manufacturer: "BMW",
//     model: "X5",
//     price: 55000,
//     diller: {
//         adress: {
//             zip: 12345,
//             city: "Dnipro",
//             street: "L. Stal'",


//         },
//         bank: "Privat"
//     },
//     setPrice(discount) {
//         this.price = this.price - (this.price*discount/100);
//     },
//     showInfo() {
//         console.log(`${this.manufacturer}, ${this.model}, ${this.price}, ${this.diller.bank}`);
//     }
// }

// // console.log(car.diller.adress.city);
// car.setPrice(10)
// car.showInfo()
// // console.log(car.price);


const BMW = {
    manufacturer: "BMW",
    model: "X5",
    price: 55000,
    diller: {
        adress: {
            zip: 12345,
            city: "Dnipro",
            street: "L. Stal'",


        },
        bank: "Privat"
    }
}

const Audi = {
    manufacturer: "Audi",
    model: "A6",
    price: 60000,
    diller: {
        adress: {
            zip: 56789,
            city: "Lviv",
            street: "Washington",


        },
        bank: "Privat"
    }
}


const carData = {
    setPrice(discount) {
        this.price = this.price - (this.price*discount/100);
    },
    showInfo() {
        console.log(`${this.manufacturer}, ${this.model}, ${this.price}, ${this.diller.bank}`);
    }}


console.log(carData.showInfo.bind(Audi));


