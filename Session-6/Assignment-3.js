let a=[12,30,40,33,8]
console.log(a)
let sum=a.reduce((acc,e)=>acc+e);
console.log("Sum is ",sum);
console.log("Even numbers:")
let res=a.filter((e)=>e%2===0)
console.log(res)
console.log("Odd numbers:")
let res1=a.filter((e)=>e%2===1)
console.log(res1)