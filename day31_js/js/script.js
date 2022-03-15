/**
 * 
 */


let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);

console.log("------------------------");
console.log(new Date('2022-03-13').getDay()); // 0 일요일 - zero base를 나타냄
console.log(new Date('2022-03-15').getDay());
console.log(new Date('2022-03-19').getDay());

console.log("------------------------");
let x=999;
var y=888;
const z=0;


/*
console.log(n);
var n = 'hoon'; // undefined (에러는 안뜸)
let n = 'hoon'; // 에러뜸
*/

/*
function sayHello() {
	return name;
}
function sayHello2() {
	return name2;
}

var name='gildong';
let name2='gildong'; 

var name = 'bb'; // 중복 허용. 덮어쓰기
let name2= 'gildong'; // 중복 '선언' 비허용

console.log(sayHello());
console.log(sayHello2());
*/

//console.log(hello);
//console.log(hello2);

//const hello= ['hi']; // 호이스팅 문제 (오류 발생)
//var hello2 = '안녕하세요'; // undefined