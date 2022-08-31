function printSalary(employee) {
    // if (employee) {
    //     console.log(employee.salary, "is salary");
    // }
    try {
        console.log("line  0");
        console.log(employee.salary, "is salary");
        console.log("line  1");
        console.log("line  2");
    } catch (e) {
        console.log("Please provide a defined data");
    }
}

var emp = {
    name: "John",
    salary: 20000
}

printSalary();