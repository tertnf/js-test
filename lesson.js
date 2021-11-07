// // let message = prompt('Enter password');
// let message = "a";
// console.log(message);
//--
// let contries = ['USA', 'Greate Bretain', 'Russia', 'China', 'Ukraine'];
// let vakcines = ['Phizer', 'AstraZeneca', 'Sputnik-V', 'Coronovac', 'Kozak'];
// function vakcinationBank(contriesArr, vakcinesArr) {
//     let bank = {};
//     for (let i = 0; i < contriesArr.length; i += 1) {
//         bank[contriesArr[i]] = vakcinesArr[i];
//         // user["age"] = 30;
//         // console.log(contriesArr[i]);
//         // console.log(vakcinesArr[i]);
//     }
//     return bank;
// }
// let result = vakcinationBank(contries, vakcines);
// console.log(result);

let contries = ['USA', 'Greate Bretain', 'Russia', 'China', 'Ukraine'];
let vakcines = ['Phizer', 'AstraZeneca', 'Sputnik-V', 'Coronovac', 'Kozak'];
function vakcinationBank(contriesArr, vakcinesArr) {
let bank = {};

    for  (let contry in contries) {
        bank[contriesArr[contry]] = vakcinesArr[contry];       
    }
    return bank;
}
let result = vakcinationBank(contries, vakcines);
console.log(result);

// let contries = ['USA', 'Greate Bretain', 'Russia', 'China', 'Ukraine'];
// for (let contry of contries) {
//     console.log(contry);
//  }


// let contriesNew = ['USA', 'Greate Bretain', 'Russia', 'China', 'Ukraine'];
// for (let contry in contriesNew) {
//     console.log(contriesNew[contry]);
// }
