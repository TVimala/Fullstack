console.log("sum of array:")
let a=[12,30,40,33,8]
console.log(a)
let sum=a.reduce((acc,e)=>acc+e);
console.log("Sum is:",sum);
console.log("Mapping:");
let abc=[1,2,3,4,5,6]
let i=0;
let b=abc.map((e)=>{
    i+=10;
    return e+i;
});
console.log(b);
console.log("Max score:")
const students = [
    { name: "ravi", scores: { maths: 89, physics: 70, chemistry: 88 } },
    { name: "bhanu", scores: { maths: 98, physics: 50, chemistry: 68 } },
    { name: "kiran", scores: { maths: 50, physics: 82, chemistry: 94 } }
];
  const maxScores = students.reduce((maxScores, student) => {
    Object.entries(student.scores).forEach(([subject, score]) => {
      if (!(subject in maxScores) || score > maxScores[subject].score) {
        maxScores[subject] = { name: student.name, score };
      }
    });
    return maxScores;
  }, {});
  console.log(maxScores);