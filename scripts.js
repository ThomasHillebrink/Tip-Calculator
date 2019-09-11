const appetizer = document.getElementById('appetizerCost')
const mainCourse = document.getElementById('mainCourseCost')
const dessert = document.getElementById('dessertCost')

const subTotal = document.getElementById('subTotalNum')
const tipInput = document.getElementById('tipInput')
const tipNum = document.getElementById('tipNum')
const taxNum = document.getElementById('taxNum')
const totalNum = document.getElementById('totalNum')

let today = new Date(); 
let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes()


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
    let tipTotal = parseFloat(tipInput.value);
    let appetizerCost = parseFloat(appetizer.value)
    let mainCourseCost = parseFloat(mainCourse.value)
    let dessertCost = parseFloat(dessert.value)

    let subtotalCost = (appetizerCost + mainCourseCost + dessertCost).toFixed(2);
    subTotal.innerHTML = "€" + subtotalCost;

    let withTax = (subtotalCost * 0.14).toFixed(2);
    taxNum.innerHTML = "€" + withTax;

    let tip = (withTax * (tipTotal / 100)).toFixed(2);
    tipNum.innerHTML = "€" + tip;

    let total = parseFloat(subtotalCost + withTax + tip).toFixed(2);
    totalNum.innerHTML = "€" + total;
};

appetizer.addEventListener('input', Price);
mainCourse.addEventListener('input', Price);
dessert.addEventListener('input', Price);
tipInput.addEventListener('input', Price);