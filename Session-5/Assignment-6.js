let a=5
let b=6
let c=11
console.log(a+" "+b+" "+c)
console.log("Big of two:")
if(a>b)
console.log("a is big")
else 
console.log("b is big")
console.log("Big of three:")
if(a>b && a>c)
console.log("a is big")
else if(c>b && c>a)
console.log("c is big")
else
console.log("b is big")
console.log("Factors of a number:")
let n=9
console.log("Entered number:"+n);
    for(let i=1;i<=(n/2);i++){
        if(n%i==0)
        console.log(i);
    }
console.log(n);
console.log("Prime or not:")
let count=0;
for(let i=1;i<=n;i++){
   if(n%i==0){
    count++;
   }
}
if(count==2)
console.log("prime")
else
console.log("Not prime")
console.log("Even factors:")
let u=12;
console.log("Entered number:"+u);
for(let i=1;i<=u;i++){
    if(u%i==0 && i%2==0)
    console.log(i);
}
console.log("Sum of digits:")
let v=1234;
console.log("Entered number:"+v);
let sum=0;
for(let i=0;i<n;i++){
    sum+=v%10;
    v=Math.floor(v/10);
}
console.log("Sum:"+sum);




