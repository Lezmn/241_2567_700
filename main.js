/*//string number boolean object array

//string
let firstname = 'John';
const idcard = '1234';
console.log(firstname);

//number
let age = 25;
let height = 5.9;

//boolean
let isMarried = false;
 firstname = 'xxx';
//ปิดไว้ก่อน idcard = '1234';

console.log('my name is', firstname , ' and I am ', age, ' years old.'); 

// บวก ลบ คูณ หาร หารเอาเศษ mod
/*
let number1 = 5;
let number2 = 10;

let result = number1 / number2;
console.log(result);
*/
/*
let number3 = '4';
let number4 = '10';

let result1 = number3 + number4;
console.log(result1);

// ==, !=,> , <, >= , <=
/*
let number5 = 5;
let number6 = 5;

let condition = number5 >= number6;
console.log('resualt of condition',condition);

// if - else

let number1 = 5;
let number2 = 10;


if(number1 != number2){
    console.log('this is if');
}
else if(number1 == number2){
    console.log('this is else if');
}
else{
    console.log('this is else');
}
*/

 /*
// 80 a 70 b 60 c 50 d
let score = prompt('Enter your score:');
console.log('Ur score is'+ score);

if(score >= 80){
    console.log('U R grade A');
}else if(score >= 70){
    console.log('U R grade B');
}else if(score >= 60){
    console.log('U R grade C');
}else if(score >= 50){
    console.log('U R grade D');
}else{
    console.log('U R grade F');
}
*/
/*
// $$และ ||หรือ ! ไม่ 
let number1 = 5;
let number2 = 8;
/*
// true && true 
let condition = number1 >= 3 && number2 >= 5;
console.log('resualt of condition',condition);
*/
/*
let condition = !(number1 >= 3 || number2 >= 10);
console.log('resualt of condition',condition);

let age = 30;
let gender = 'male';

if(age >= 30 && gender == 'male'){
    console.log('U R male adult');
}
else{
    console.log('U R young');
}
*/
/*
let number = 25;

if!(number % 2 == 0){
    console.log('you r evenwp number');
}
*/

// loop
/*
let count = 0;
console.log('while loop');

while(count < 10){//true
    console.log('while');
    count++;
}

for(let counter = 0; counter < 10; counter++){
    console.log('for loop');
}
*/
/*
// array

let ages = [30,35,40];
console.log('new ages',ages[2]);
console.log('age list',ages);

// แทนที่ค่าใน array
ages = [45, 50];
console.log('new age',ages);

// ต่อค่าใน array
ages.push(55);
console.log('new age',ages);

let age = [90,60,40,80,30];

if(age.includes(40)){
    console.log('U have to b 40');
}

console.log(age);
age.sort();
console.log(age);

let name_list = ['john','jane','joe'];
name_list.push('mike');
console.log(name_list);
console.log(name_list.length);
console.log(name_list[2]);

for (let index = 0; index <= name_list.length; index++){
    console.log('name list',name_list[index]);
}
*/

//Odject
/*
let student = [{
    name: 'zz',
    age: 90,
    grade: 'A'
}, {
    name: 'aaa',
    age: 66,
    grade: 'B'
}];
//เพิ่มข้อมูลใน object ใช้ push เหมือนกัน
student.push ({
    name: 'QQ',
    age: 90,
    grade: 'Q'
})
//ตัดข้อมูลใน object ใช้ pop เหมือนกัน
student.pop();

//ใช้ loop ในการแสดงข้อมูลใน object
for (let index = 0; index < student.length; index++){
    console.log('student number',(index+1));
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}
*/
/*
let score = 50
let score1 = 90
let grade = ''
//ประกาศ funtion ชื่อ calculateGrade ที่มี parameter เป็น score
function calculateGrade(score){
    if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade
}
//เรียกดูค่าของ function โดยใช้ parameter ที่กำหนดไว้ ใส่ในตัวแปร student1,student2
let student1 = calculateGrade(score)
let student2 = calculateGrade(score1)
console.log('grade:', student1,student2 )
*/
/*
let score = 50
let score1 = 90
let grade = ''

//arrow funtion
function calculateGrade = (score) =>{
    if (score >= 80) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return grade
}
//เรียกดูค่าของ function โดยใช้ parameter ที่กำหนดไว้ ใส่ในตัวแปร student1,student2
let student1 = calculateGrade(score)
let student2 = calculateGrade(score1)
console.log('grade:', student1,student2 )
*/

/*
//array
let score = [10,20,30,40,50,60,70,80,90,100];
for (let index = 0; index < score.length; index++){
    console.log(score[index]);
}
//arrow funtion ดึงข้อมูลใน array ทุกตัว


score[0] = score[0] *2;
score[1] = score[1] *2;
score[2] = score[2] *2;
score[3] = score[3] *2;
score[4] = score[4] *2;

// .map  กระทำกับข้อมูลใน parameter ทุกตัว และ return 
score = score.map((s) => {
    return s * 2;
});

score.forEach((s) => {
    console.log('score:',s);
})
*/

//let scores = [10, 20 ,30 ,40];
//let newScores = []

//for (let index = 0; index < scores.length; index++){
    //console.log('Score',scores[index]);
    /*
    if(scores[index] >= 30){
        newScores.push(scores[index]);
    }
        */
//}
//เขียนใหม่แทนใน .push ด้านบนที่ comment ไว้
// filter เช็คข้อมูลในทุกตัว และ return ข้อมูล
/*
let newScores = scores.filter((s) => {
    return s >= 30;
})
newScores.forEach((ns) => {
    console.log('New score',ns);
})
// .map arrow filter ไปศึกษาเพิ่มเติม*/

//odject funtion

let students = [
    {
        name: 'zz',
        score: 90,
        grade: 'A'
    },{
        name: 'aaa',
        score: 66,
        grade: 'B'
    },{
        name: 'jim',
        score: 60,
        grade: 'C'
    }
]
//find หาข้อมูลใน object
let student = students.find((s) => {
    if(s.name == 'aaa'){
        return true
    }
}) 
let doublescore_student = students.map((s) => {
    s.score = s.score *2
})
let hightscore_student = students.filter((s) => {
    if(s.score > 80){
        return true
    }
})
console.log('student:',student);
//แสดงข้อมูลใน object
console.log('high score student:',hightscore_student);