let student={
    rollno:2081,
    name:'vimala',
    branch:'CSE',
    college:'PVPSIT'
};
console.log(student)
let bus={
   busno:2,
   name:'yogii',
   des:'Hyd',
   ticket:2045
};
console.log(bus)
let employee={
   id:30,
   name:'varun',
   age:23,
   salary:44000
};
console.log(employee)
let mobile={
   brand:'Redmi',
   storage:'128GB',
   Ram:'4GB',
   price:25000
};
console.log(mobile)
console.log('student data:')
let student1 = {
   rollno: 20,
   name: "vimala",
   marks: [12, 13, 14],
   address: {
       dno:12,
       city:'vijayawada'
   },
   get: function() {
       return (this.marks.reduce((a,e)=> a+e)/3);
   },
};
console.log(student1.get());
console.log(student1)
console.log(student1.address)
student1.get()
console.log("product details:")
let product= {
   productno: 182,
   productname: "iphone 15",
   model:'black titanium',
   price:75000,
   discount: function(val) {
     let Amount = (this.price-this.price*(val/ 100))
       console.log("discount amount:"+Amount)
   },
};
console.log(product)
product.discount(15)
