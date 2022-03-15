import random from './getRandom.js'

const ulEl = document.querySelector('ul');

for(let i=0; i<10; i++) {
    const li = document.createElement('li');
    li.textContent = `list-${i+1}`;
    li.addEventListener('click',function() {
        alert(li.textContent);
        console.log(li.textContent);
    })
    ulEl.appendChild(li);
}

/*
// 동적 생성
const ulEl = document.querySelector('ul');
for(let i=0; i<3; i++) {
    //console.log(i);
    const li = document.createElement('li');
    li.textContent = `사과-${i+1}`
}
*/

/*
// 찾은 요소들 반복해서 함수 실행 - main.js 파일
boxEls.forEach(function(boxEl, index) {
    console.log(index, boxEl);
    boxEl.classList.add(`order-${index+1}`);
});
*/

const kbs = random();

if(kbs === 0 ) {
    console.log('a is 0');
}

//console.log(-1);
console.log('-----------------------------------');
const i = 1===2;
const j = 'AB'==='AB';
const k = true;

console.log(i);
console.log(j);
console.log(k);
console.log('&&:', i && j && k);
console.log('||: ',i||j||k);

console.log(j ? '참':'거짓');




// 자바스크립트에선 === 쓰는걸 권장
console.log('-----------------------------------');
const a=1;
const b="1";
const c=3;

console.log(a==b); // true
console.log(a===b); // false
console.log('comparison operator: '+(a!==c))
console.log(a<c);

function isEqual(x,y) {
    return x===y;
}

console.log(isEqual(1,1)); // true
console.log(isEqual(a,c)); // false

console.log('-----------------------------------');
console.log("abc".length); // 3

let x=3;
let y=7;


/*
const x = Number(prompt("Input X"));
const op = prompt("Input Operator you want: e.g) +-/* or **");
const y = Number(prompt("Input Y"));

let res;

calc(x, y);

function calc(x, y) {
    switch(op) {
        case '+':
            res = x+y;
            return res;
        case '-':
            res = x-y;
            return res;
        case '*':
            res = x*y;
            return res;
        case '/':
            res = x/y;
            return res;
        case "**":
            res = x**y;
            return res;
        default: console.log("Please input correct operator");
    }
}
console.log(res);

*/