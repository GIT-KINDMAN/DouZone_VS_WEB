// day32_2.js

// Timer 함수


// 호이스팅(Hoisting): 함수 선언부가 유효버무이 촤상단으로 끌어올려지는 현상

// 화살표(Arrow) 함수 (Function)
const double = function(x) {
    return x*2;
}
console.log('double:',double(7));
/*
const doubleArrow = (x) => { // function(x) == (x) =>
    return x*2;
}*/ // 여기서 더 줄이면
//const doubleArrow = (x) => x*2; // 이렇게. return도 생략 가능한 이유는 그냥 매개변수가 1개라서
//const doubleArrow = x => [1,2,3]; // 이건 단순히 배열 찍은 결과가 나옴
const doubleArrow = x => ({name:'hoon'}) // key:value 로 들어간건 무조건 객체임 -> {} 한번 더 씌워줘야 함
console.log('doubleArrow:',doubleArrow());

const mul= function(x,y) {
    return x*y;
}
console.log('mul:',mul(3,4));

const mulArrow = (x,y) => x*y;
console.log('mulArrow:',mulArrow(10,20));

const show = function() {
    return "show!!";
}
console.log('show:',show());

const showArrow = () => "showArrow!!";
console.log('showArrow:',showArrow());


// 함수
function sub() {
    console.log(arguments);
    return arguments[0];
}
console.log(sub(7,3));

const hap = function(x,y) { // 함수 정의
    if(x<2) {
        return;
    }
    return x+y;
}

console.log('hap='+hap(99,99));

function plus(x,y) { // 함수 정의
    return x+y;
}

const d = plus(2,3);
const e = plus(12,13);

console.log(d);
console.log(e);
console.log(d+e);
console.log(plus(3,5));

function sum(x,y) { // 함수 정의부
    console.log(x+y);
}

sum(1,2);

// 형 변환(Type Conversion)
// Truthy(참과 같은 값)
// true, {}, [], 1, 'a', -12, '12.34', 12.34
// Falsy(거짓과 같은 값)
// false, '', null, undefined 0, -0, NaN
const b = 123;
const c = '1';

console.log(b==c);


// 변수 유효범위 - var(생존범위: 함수 레벨) / let, const(생존범위: 블럭 내부)

function scop() { // 함수 정의부
    if(true) {
        console.log(a);
        var a = 123; // var: undefined(함수 레벨이라서) / const, let: error (블럭 레벨이라서)
    }
}

scop(); // 함수 호출

// var x = 12.34;
// console.log(x);