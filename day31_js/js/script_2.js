// Object: 객체 데이터
// 여러 데이터를 key: value 형태로 저장한다. {}
/*
let user = {	// var는 IE 등에선 못씀 브라우저 타니까 알아서 결정해서 써라
	// Key:Value
	name: 'Hoon', // cf)'key':'value'
	age: 20,
	isValue: true
} // user라는 객체가 생성된 것

console.log(user.name);
console.log(user.age);
console.log(user.isValue);

console.log("----------------");

let a = 1;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
*/
console.log("----------------");
/*
function returnFunc() {
	// 실행 코드
	return '123';
}
let result = returnFunc();
console.log(result);
console.log(returnFunc());



function helloFunc() {
	// 실행 코드
	console.log(1004);
}
// 함수 호출
helloFunc();
*/
console.log("----------------");
function sum(a,b) { // parameters
	return a+b;
}

let hap = sum(1,2);
let cha = sum(10,20);
let gob = sum(11,22);

console.log(hap);
console.log(cha);
console.log(gob);

console.log("----------------");
/*
class Point {
	int x;
	
	public int getX() {return x;}
	public void setX(int x) {this.x=x;}
}
*/
const p = new Point(10, 20);

console.log("----------------");

// 객체 데이터
const hoon = {
	name: '동훈',
	age: 20,
	getName: function() {
		return this.name;
	}
}


console.log("----------------");

// 익명 메소드
let test = function() {
	document.write("Hello world");
};

console.log("----------------");

with(hoon) {
	console.log(name);
	console.log(age);
}

