import { employees } from "./Assignment8.js";
console.log(employees)
console.log("Employees name:")
for (let i = 0; i < employees.length; i++) {
    if (employees[i].address.city.toLowerCase()==='hyderabad') {
        console.log(employees[i].name);
    }
}
console.log("Names and address according to age:")
let Emp=employees.filter((e)=>e.age>=40 && e.age<=50)
Emp.forEach((employee) => {
console.log(employee.name);
console.log(employee.address);
})
console.log("Employees not from Hyd:")
for(let i = 0; i < employees.length; i++) {
    if (employees[i].address.city.toLowerCase()!='hyderabad') {
        console.log(employees[i]);
    }
}
console.log("Skills includes Reactjs:")
let skill=employees.filter((e)=>e.skills.includes('reactjs'))
skill.forEach((e)=>{
    console.log(e.name);
})