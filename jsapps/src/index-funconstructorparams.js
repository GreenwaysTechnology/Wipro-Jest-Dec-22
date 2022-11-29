//constructor parameters
function Employee(id = 1, name = 'Subramanian') {
    //instance variables
    this.id = id 
    this.name = name
    //instance methods
    this.calculate = function () {
        return 100
    }
}
//
let emp = new Employee(34,'Ram')
console.log(`id ${emp.id} Name ${emp.name} Salary ${emp.calculate()}`)