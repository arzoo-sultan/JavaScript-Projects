let numbers=[1,2,3,4,5];
numbers.forEach((item)=>console.log(item*2));
const evenNum=numbers.filter(num=>num%2===0);
console.log(evenNum);
const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);
const students = [
  { name: "Ali", marks: 85, passed: true },
  { name: "Sara", marks: 45, passed: false },
  { name: "Bilal", marks: 92, passed: true }
];
students.forEach((student)=>{
    console.log(`Hello ${student.name}`);
})
const findFailedStudent=students.find((student)=>{
    return student.passed===false;
})
console.log(findFailedStudent.name);//will return name of student
const marks=students.find((student)=>{
    return student.marks>=85;
})
console.log(marks);//will return student object whose marks are less than or equal to 85,returns item
 const passedStudent=students.some(s=>s.passed===true);
 console.log(passedStudent);
 const allPassed=students.every(s=>s.passed===true);
 console.log(allPassed);