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

window.onload = function() {
    appetizer.value = '00.00';
    mainCourse.value = '00.00';
    dessert.value = '00.00';


    }

function Price() {
    let tipTotal = parseFloat(tipInput.value)
    let appetizerCost = parseFloat(appetizer.value)
    let mainCourseCost = parseFloat(mainCourse.value)
    let dessertCost = parseFloat(dessert.value)



console.log(appetizerCost + mainCourseCost + dessertCost)

    let subtotalCost = appetizerCost + mainCourseCost + dessertCost
    let subtotalCostRounded = subtotalCost.toFixed(2);
    subTotal.innerHTML = "€" + subtotalCostRounded;

    let withTax = subtotalCost * 0.14
    let withTaxRounded = withTax.toFixed(2);
    taxNum.innerHTML = "€" + withTaxRounded;

    let tip = ((tipTotal / 100) * subtotalCost )
    console.log(typeof tip)
    let tipRounded = tip.toFixed(2);
    tipNum.innerHTML = "€" + tipRounded;

    let total = (subtotalCost + withTax + tip);
    totalRounded = total.toFixed(2);
    console.log(total);
    totalNum.innerHTML = "€" + totalRounded;
};

appetizer.addEventListener('input', Price);
mainCourse.addEventListener('input', Price);
dessert.addEventListener('input', Price);
tipInput.addEventListener('input', Price);