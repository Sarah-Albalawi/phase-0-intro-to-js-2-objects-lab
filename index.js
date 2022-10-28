// Write your solution in this file!
let employee ={
    name: 'Sarah',
    streetAddress:'Gaza',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newObj = {...employee};
    newObj[key]= value;
    return newObj;

}
let employeeObj =updateEmployeeWithKeyAndValue(employee, 'name','Sam');
employeeObj += updateEmployeeWithKeyAndValue(employee, 'streetAddress','12 Broadway');


 function  destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.name = 'Sam';
    employee.streetAddress= '12 Broadway';
  return employee;
 }
//let origionEmploye = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
//origionEmploye+= destructivelyUpdateEmployeeWithKeyAndValue (employee, 'streetAddress','12 Broadway');

    



function deleteFromEmployeeByKey(employee, key){
    let newEmployee= {...employee};
   //newEmployee[key]=value;
   delete newEmployee.name;
   return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee){
         delete employee.name;
         delete employee.streetAddress;
         return employee;
}

//let del = destructivelyDeleteFromEmployeeByKey(employee, 'name');