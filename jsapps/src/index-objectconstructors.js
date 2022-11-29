//constructor patterns
function Employee() {
    //instance variables
    this.id = 1
    this.name = 'Subramanian'
    //instance methods
    this.calculate = function () {
        return 100
    }
}
//
let emp = new Employee()
console.log(`id ${emp.id} Name ${emp.name} Salart ${emp.calculate()}`)