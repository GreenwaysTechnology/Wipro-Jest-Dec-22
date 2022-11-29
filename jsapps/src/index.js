const info = require('./mylib')
const CustomerService = require('./services/customer.service')

console.log(info)
console.log(info.name,info.status)
let customerService = new CustomerService()
console.log(customerService.findAll())