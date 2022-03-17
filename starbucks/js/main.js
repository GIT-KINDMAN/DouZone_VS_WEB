/*main.js*/
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
    /* serachEl.focus(); */
});

searchInputEl.addEventListener('focus',function() {
    searchInputEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합 검색');
});


searchInputEl.addEventListener('blur',function() {
    searchInputEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

/*
searchEl.addEventListener('focus',function() {
    searchEl.classList.remove('focused');
    searchEl.setAttribute('placeholder','');
});

searchEl.addEventListener('blur',function() {
    searchEl.classList.add('focused');
    searchEl.setAttribute('placeholder','search');
});
*/