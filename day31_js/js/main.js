// HTML 요소(Element) 1개 검색/찾기
const boxEl = document.querySelector('.box');
console.log(boxEl);
// HTML 요소에 적용할 수 있는 메소드
//boxEl.addEventListener();
// boxEl.addEventListener(1,2);인수 2개
boxEl.addEventListener('click', function() {
	console.log('click!');
	//alert('Click.');
	boxEl.classList.add('active');
	console.log(
		boxEl.classList.contains('active')
	);
	
	boxEl.classList.remove('active');
	console.log(
		boxEl.classList.contains('active')
	);
});


// HTML 요소(Element) 1개 검색/찾기
const boxEl2 = document.querySelector('.box');
console.log(boxEl2);

// HTML 요소(Element) 모두 검색/찾기	
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행
boxEls.forEach(function(boxEl, index) {
	boxEl.classList.add(`order-${index+1}`);
});

const a = 'Hello';
const b = a.split('').reverse().join(); // 메소드 체이닝...

console.log(a);
console.log(b);

console.log('************************');
