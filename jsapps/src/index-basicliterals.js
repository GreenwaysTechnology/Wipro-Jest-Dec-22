//variable declaration and values(literals) assigments

//strings : '',"",``
var firstName = 'Subramanian'
let lastName = 'Murugan'
console.log("Name " + firstName + lastName)
console.log("Name ", firstName, lastName)
console.log(`Name  ${firstName}  ${lastName}`)

//numbers
let salary = 1000
let totalSalary = salary * 10
console.log(`Salary ${salary} Total Salary ${totalSalary}`)

//booleans
let isValid = true
let isEnabled = false
console.log(`Valid ${isValid} Enabled ${isEnabled}`)

//undefined 
let qty;
console.log(`Qty ${qty}`)

//NaN - not a number - it is runtime numerical error code.
//NaN is bug when get NaN you have to fix it. 
//NaN you get when you do computation against undefined variables

let price = 100
let totalPrice = qty * price
console.log(`Qty ${qty} price ${price} TotalPrice ${totalPrice}`)

//infinity
let avgPrice = price / 0
console.log(`Avg  Price ${avgPrice}`)





