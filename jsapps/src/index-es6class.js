//constructor parameters
class Employee {
    constructor(id = 1, name = 'Subramanian') {
        //instance variables
        this.id = id
        this.name = name
    }
    //instance methods
    calculate() {
        return 100
    }
}
//
let emp = new Employee(34, 'Ram')
console.log(`id ${emp.id} Name ${emp.name} Salary ${emp.calculate()}`)