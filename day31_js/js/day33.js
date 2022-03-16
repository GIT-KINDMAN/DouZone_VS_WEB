/** day33.js */

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행 -- 자동 로그아웃의 경우 대강 20-30분 정도로 두는게 평균적. 금융사이트 제외(5분미만일수도)
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

/*const timer = setTimeout(function(){
	console.log('Hello JS!!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=> {
			clearTimeout(timer)
})*/

// 콜백(Callback): 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)

function timeout(callback) {
	setTimeout(()=> {
			console.log('Hello JS!!')
			callback()
		}, 3000)
}

timeout(() => { 
	console.log('Done')
})

//cf) 작업의 순서를
function timeout() {
    setTimeout(()=>{console.log('Hello JS!!')}, 3000)
}

// 함수
function sub(x,y) {
    // console.log('sub.length:'+sub.length); // 0
    // console.log('arguments.length'+arguments.length); // 3
    // return arguments[0]; 
    return x+y;
}

console.log(sub()); // NaN
console.log(sub(7,3)); // 10
console.log(sub(7,3,5,9)); // 출력:10(7+3) 나머지 버린다