class employee{
    constructor(name,age,salary){
        this.name=name
        this.age=age
        this.salary=salary
    }
    getsalary(){
        console.log(this.salary)
    }
}
const s1=new employee('aaa',20,40000)
const s2=new employee('abc',35,35000)
const s3=new employee('abaa',25,23000)
const s4=new employee('hii',19,20000)
const s5=new employee('heloo',63,75000)
s1.getsalary()
s2.getsalary()
s3.getsalary()
s4.getsalary()
s5.getsalary()
console.log("products:")
class product{
    constructor(productno,name,model,price){
    this.productno=productno
    this.name=name
    this.model=model
    this.price=price
    }
    discount(val){
      let Amount = (this.price-this.price*(val/ 100))
        console.log("discount amount:"+Amount)
    }
}
const p1=new product(22,'iphone 11','XES',40000)
p1.discount(16)
const p2=new product(145,'iphone 12','RED',50000)
p2.discount(23)
const p3=new product(67,'iphone 13','EDF',60000)
p3.discount(18)
const p4=new product(34,'iphone 14','H2X',70000)
p4.discount(34)
const p5=new product(798,'iphone 15','3R4',80000)
p5.discount(9)