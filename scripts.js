const appetizer = document.getElementById('appetizerCost')
const mainCourse = document.getElementById('mainCourseCost')
const dessert = document.getElementById('dessertCost')
const drinks = document.getElementById('drinkCost')

const subTotal = document.getElementById('subTotalNum')
const tipInput = document.getElementById('tipInput')
const tipNum = document.getElementById('tipNum')
const taxNum = document.getElementById('taxNum')
const totalNum = document.getElementById('totalNum')

let today = new Date();
let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes()


currentTime = document.getElementById('Time')
currentTime.innerHTML = time;

currentDate = document.getElementById('Date');
currentDate.innerHTML = date;

randomOrder = Math.floor(Math.random() * 1000);
ordernumber = document.getElementById('order')
ordernumber.innerHTML = "Ord#" + randomOrder

randomTable = Math.floor(Math.random() * 100);
tableNumber = document.getElementById('tableNum')
tableNumber.innerHTML = "Tbl#" + randomTable

function Price() {
    let tipTotal = parseFloat(tipInput.value)
    let appetizerCost = parseFloat(appetizer.value)
    let mainCourseCost = parseFloat(mainCourse.value)
    let drinksCost = parseFloat(drinks.value)
    let dessertCost = parseFloat(dessert.value)


    let subtotalCost = appetizerCost + mainCourseCost + dessertCost + drinksCost
    subTotal.innerHTML = "€" + subtotalCost.toFixed(2);

    let withTax = subtotalCost * 0.14
    taxNum.innerHTML = "€" + withTax.toFixed(2);

    let tip = ((tipTotal / 100) * subtotalCost)
    tipNum.innerHTML = "€" + tip.toFixed(2);

    let total = (subtotalCost + withTax + tip);
    totalNum.innerHTML = "€" + total.toFixed(2);
};

appetizer.addEventListener('input', Price);
mainCourse.addEventListener('input', Price);
dessert.addEventListener('input', Price);
drinks.addEventListener('input', Price);
tipInput.addEventListener('input', Price);


window.onload = () => {
    appetizer.value = '14.99';
    mainCourse.value = '29.99';
    dessert.value = '9.99';
    drinks.value = '15.96';
    Price();

};