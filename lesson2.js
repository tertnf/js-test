// let vakcines = ['Phizer', 'AstraZeneca', 'Sputnik-V', 'Coronovac'];
// let newVakcine = "Kozak";
// for (let vakcine of vakcines) {
//     if (vakcine !== newVakcine)
//         vakcines.push(newVakcine);
//     break;
// }
// console.log(vakcines);

// let vakcines = ['Phizer', 'AstraZeneca', 'Sputnik-V', 'Coronovac'];
// let newVakcine = "Kozak";
// let vakcinesWithUkraine = [];
// for (let vakcine of vakcines) {
//     if (vakcine !== newVakcine){
//         vakcinesWithUkraine = [...vakcines, newVakcine];
//     break;}
// }
// console.log(vakcinesWithUkraine);

// let vakcines = ['Phizer', 'AstraZeneca', 'Sputnik-V', 'Coronovac'];
// let newVakcine = "Kozak";
// let vakcinesWithUkraine = [];
// let result = vakcines.includes(newVakcine);
//     if (!result){
//         vakcinesWithUkraine = [...vakcines, newVakcine];
//     }
// console.log(vakcinesWithUkraine);

// function addVakcine(vakcinesArr, newVakcine) {
//     let vakcinesWithUkraine = [];
//     let result = vakcinesArr.includes(newVakcine);
//     if (!result){
//         vakcinesWithUkraine = [...vakcinesArr, newVakcine];
//     }
//     return vakcinesWithUkraine;
// }

// let vakcines = ['Phizer', 'AstraZeneca', 'Sputnik-V', 'Coronovac'];
// let newVakcine = "Kozak";

// let result = addVakcine(vakcines, newVakcine);
// console.log(result);

// function updateVakcine(vakcinesArr, oldVakcineName, newVakcineName) {
//   let vakcinesWithUkraine = [];
//   for (let item of vakcinesArr) {
//     if (item === oldVakcineName) {
//       let idx = vakcinesArr.indexOf(item);
//       vakcinesArr[idx] = newVakcineName;
//       vakcinesWithUkraine = [...vakcinesArr];
//     }
//   }

//   return vakcinesWithUkraine;
// }

// let vakcines = ["Phizer", "AstraZeneca", "Sputnik-V", "Kozak", "Coronovac"];
// let newVakcineName = "Kozak+";
// let oldVakcineName = "Kozak";

// let result = updateVakcine(vakcines, oldVakcineName, newVakcineName);
// console.log(result);

// function deleteVakcine(vakcinesArr, VakcineName) {
//   let vakcinesWithUkraine = [];
//   for (let item of vakcinesArr) {
//     if (item === VakcineName) {
//       let idx = vakcinesArr.indexOf(item);
//         vakcinesWithUkraine = [...vakcinesArr];
//         vakcinesWithUkraine.splice(idx, 1);
        
//     }
//   }

//   return vakcinesWithUkraine;
// }

// let vakcines = ["Phizer", "AstraZeneca", "Sputnik-V", "Kozak", "Coronovac"];
// let VakcineName = "Sputnik-V";


// let result = deleteVakcine(vakcines, VakcineName);
// console.log(result);

//home work 3
//#14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//     const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//         propCount += 1;
        
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// let test = {
//     1: 1,
//     2: 2,
//     3: 3,
//     6: 7
// };


// console.log(countProps(test));

//#15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys, values);

//#16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     let keys = Object.keys(salaries);
//     let salary = Object.values(salaries);
      
//   // Change code below this line
//     for (let key in keys) {
//         totalSalary += salary[key];
//         console.log(totalSalary);
// }
//   // Change code above this line
//   return totalSalary;
// }

// let salaries = {
//     ivan: 30,
//     fedor: 50,
//     gleb: 40
// }

// countTotalSalary(salaries);
// console.log(totalSalary);

//#17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];


// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//     // hexColors.push(colors.hex[value]);
//     // rgbColors.push(colors.rgb[value]);
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors, rgbColors);

//#18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     let price = null;
//     for (let product of products) {
//         if (product.name.includes(productName)) {
//             price = product.price;
//         }

       
//     }

// return price;
//   // Change code above this line
// }




// console.log(getProductPrice('ell'));
// console.log(getProductPrice('Radar'));

//#19
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line



  // Change code above this line
}

