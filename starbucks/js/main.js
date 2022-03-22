/*main.js*/
'use strict'

/**
 * 寃��됱갹 �쒖뼱
 */
// 寃��됱갹 �붿냼(.search) 李얘린.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 寃��됱갹 �붿냼瑜� �대┃�섎㈃ �ㅽ뻾.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 寃��됱갹 �붿냼 �대� �ㅼ젣 input �붿냼�� �ъ빱�ㅻ릺硫� �ㅽ뻾.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '�듯빀寃���')
})
// 寃��됱갹 �붿냼 �대� �ㅼ젣 input �붿냼�먯꽌 �ъ빱�ㅺ� �댁젣(釉붾윭)�섎㈃ �ㅽ뻾.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


/**
 * �섏씠吏� �ㅽ겕濡ㅼ뿉 �곕Ⅸ �붿냼 �쒖뼱
 */
// �섏씠吏� �ㅽ겕濡ㅼ뿉 �곹뼢�� 諛쏅뒗 �붿냼�ㅼ쓣 寃���!
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
// �섏씠吏��� �ㅽ겕濡� �대깽�몃� 異붽�!
// �ㅽ겕濡ㅼ씠 吏��섏튂寃� �먯＜ 諛쒖깮�섎뒗 寃껋쓣 議곗젅(throttle, �쇰��� 遺��섎� 以�)
window.addEventListener('scroll', _.throttle(function () {
  // �섏씠吏� �ㅽ겕濡� �꾩튂媛� 500px�� �섏쑝硫�.
  if (window.scrollY > 500) {
    // Badge �붿냼 �④린湲�!
    gsap.to(badgeEl, .6, {
      opacity: 0,  // �щ챸 - �④�
      display: 'none'   //
    })
    // �곷떒�쇰줈 �ㅽ겕濡� 踰꾪듉 蹂댁씠湲�!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // �섏씠吏� �ㅽ겕濡� �꾩튂媛� 500px�� �섏� �딆쑝硫�.
  } else {
    // Badge �붿냼 蹂댁씠湲�!
    gsap.to(badgeEl, .6, {
      opacity: 1,     // 遺덊닾紐� - 蹂댁뿬以�
      display: 'block'
    })
    // �곷떒�쇰줈 �ㅽ겕濡� 踰꾪듉 �④린湲�!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// �곷떒�쇰줈 �ㅽ겕濡� 踰꾪듉�� �대┃�섎㈃,
toTopEl.addEventListener('click', function () {
  // �섏씠吏� �꾩튂瑜� 理쒖긽�⑥쑝濡� 遺��쒕읇寃�(0.7珥� �숈븞) �대룞.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


/**
 * �쒖꽌��濡� �섑��섎뒗 湲곕뒫
 */
// �섑��� �붿냼��(.fade-in) 李얘린.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// �섑��� �붿냼�ㅼ쓣 �섎굹�� 諛섎났�댁꽌 泥섎━!
fadeEls.forEach(function (fadeEl, index) {
  // 媛� �붿냼�ㅼ쓣 �쒖꽌��濡�(delay) 蹂댁뿬吏�寃� ��!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,   // 0.7, .14,....
    opacity: 1
  })
})


/**
 * �щ씪�대뱶 �붿냼 愿�由�
 */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // �섏쭅 �щ씪�대뱶
  autoplay: true, // �먮룞 �ъ깮 �щ�
  loop: true // 諛섎났 �ъ깮 �щ�
})
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // �섑룊 �щ씪�대뱶
  autoplay: { // �먮룞 �ъ깮 �щ�
    delay: 5000 // 5珥덈쭏�� �щ씪�대뱶 諛붾��
  },
  loop: true, // 諛섎났 �ъ깮 �щ�
  slidesPerView: 3, // �� 踰덉뿉 蹂댁뿬以� �щ씪�대뱶 媛쒖닔
  spaceBetween: 10, // �щ씪�대뱶 �ъ씠 �щ갚
  centeredSlides: true, // 1踰� �щ씪�대뱶媛� 媛��대뜲 蹂댁씠湲�
  pagination: { // �섏씠吏� 踰덊샇 �ъ슜 �щ�
    el: '.promotion .swiper-pagination', // �섏씠吏� 踰덊샇 �붿냼 �좏깮��
    clickable: true // �ъ슜�먯쓽 �섏씠吏� 踰덊샇 �붿냼 �쒖뼱 媛��� �щ�
  },
  navigation: { // �щ씪�대뱶 �댁쟾/�ㅼ쓬 踰꾪듉 �ъ슜 �щ�
    prevEl: '.promotion .swiper-prev', // �댁쟾 踰꾪듉 �좏깮��
    nextEl: '.promotion .swiper-next' // �ㅼ쓬 踰꾪듉 �좏깮��
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // �섑룊 �щ씪�대뱶
  autoplay: true, // �먮룞 �ъ깮 �щ�
  loop: true, // 諛섎났 �ъ깮 �щ�
  spaceBetween: 30, // �щ씪�대뱶 �ъ씠 �щ갚
  slidesPerView: 5, // �� 踰덉뿉 蹂댁뿬以� �щ씪�대뱶 媛쒖닔
  // slidesPerGroup: 5, // �� 踰덉뿉 �щ씪�대뱶 �� 媛쒖닔(�꾩껜 媛쒖닔濡� �섎돇�댁빞 ��)
  navigation: { // �щ씪�대뱶 �댁쟾/�ㅼ쓬 踰꾪듉 �ъ슜 �щ�
    prevEl: '.awards .swiper-prev', // �댁쟾 踰꾪듉 �좏깮��
    nextEl: '.awards .swiper-next' // �ㅼ쓬 踰꾪듉 �좏깮��
  }
})


/**
 * Promotion �щ씪�대뱶 �좉� 湲곕뒫
 */
// �щ씪�대뱶 �곸뿭 �붿냼 寃���!
const promotionEl = document.querySelector('.promotion')
// �щ씪�대뱶 �곸뿭瑜� �좉��섎뒗 踰꾪듉 寃���!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// �щ씪�대뱶 �곸뿭 �④� �щ� 湲곕낯媛�!
let isHidePromotion = false
// �좉� 踰꾪듉�� �대┃�섎㈃,
promotionToggleBtn.addEventListener('click', function () {
  // �щ씪�대뱶 �곸뿭 �④� �щ�瑜� 諛섎뙎媛믪쑝濡� �좊떦!
  isHidePromotion = !isHidePromotion
  // �붿냼瑜� �④꺼�� �섎㈃,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // �붿냼媛� 蹂댁뿬�� �섎㈃,
  } else {
    promotionEl.classList.remove('hide')
  }
})


/**
 * 遺��좏븯�� �붿냼 愿�由�
 */
// 踰붿쐞 �쒕뜡 �⑥닔(�뚯닔�� 2�먮━源뚯�)
function random(min, max) {
  // `.toFixed()`瑜� �듯빐 諛섑솚�� '臾몄옄 �곗씠��'瑜�,
  // `parseFloat()`�� �듯빐 �뚯닔�먯쓣 媛�吏��� '�レ옄 �곗씠��'濡� 蹂���
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 遺��좏븯��(�� �ㅻ땲��) �붿냼瑜� 留뚮뱶�� �⑥닔
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // �좏깮��
    random(1.5, 2.5), // �좊땲硫붿씠�� �숈옉 �쒓컙
    {
      delay: random(0, delay), // �쇰쭏�� ��쾶 �좊땲硫붿씠�섏쓣 �쒖옉�� 寃껋씤吏� 吏��� �쒓컙�� �ㅼ젙.
      y: size, // `transform: translateY(�섏튂);`�� 媛숈쓬. �섏쭅�쇰줈 �쇰쭏�� ��吏곸씪吏� �ㅼ젙.
      repeat: -1, // 紐� 踰� 諛섎났�섎뒗吏�瑜� �ㅼ젙, `-1`�� 臾댄븳 諛섎났.
      yoyo: true, // �쒕쾲 �ъ깮�� �좊땲硫붿씠�섏쓣 �ㅼ떆 �ㅻ줈 �ъ깮.
      ease: Power1.easeInOut // Easing �⑥닔 �곸슜.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


/**
 * �붿냼媛� �붾㈃�� 蹂댁뿬吏� �щ��� �곕Ⅸ �붿냼 愿�由�
 */
// 愿�由ы븷 �붿냼�� 寃���!
const spyEls = document.querySelectorAll('section.scroll-spy')
// �붿냼�� 諛섎났 泥섎━!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 媛먯떆�� �λ㈃(Scene)�� 異붽�
      triggerElement: spyEl, // 蹂댁뿬吏� �щ�瑜� 媛먯떆�� �붿냼瑜� 吏���
      triggerHook: .8 // �붾㈃�� 80% 吏��먯뿉�� 蹂댁뿬吏� �щ� 媛먯떆
    })
    .setClassToggle(spyEl, 'show') // �붿냼媛� �붾㈃�� 蹂댁씠硫� show �대옒�� 異붽�
    .addTo(new ScrollMagic.Controller()) // 而⑦듃濡ㅻ윭�� �λ㈃�� �좊떦(�꾩닔!)
})


/**
 * �ы빐媛� 紐� �꾨룄�몄� 怨꾩궛
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

// const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('input');

// searchEl.addEventListener('click', function() {
//     searchInputEl.focus();
//     /* serachEl.focus(); */
// });
// searchInputEl.addEventListener('focus',function() {
//     searchInputEl.classList.add('focused');
//     searchInputEl.setAttribute('placeholder','통합 검색');
// });


// searchInputEl.addEventListener('blur',function() {
//     searchInputEl.classList.remove('focused');
//     searchInputEl.setAttribute('placeholder','');
// });

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