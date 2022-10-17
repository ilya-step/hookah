// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("header").classList.remove('_active');
	} else {
		document.getElementById("header").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}


// отступ от шапки
$(document).ready(function () {
	$('.top-padding').css("height", $('#header').height());
});


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на элемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			document.body.classList.toggle('_lock')
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// аккордион
$('.accordion').accordion({
	heightStyle: 'content',
	active: 0, // индекс открытой вкладки
	header: '> .accordion-item > .accordion-header'
});


// плавная прокрутка по якорям
$('a[href*=#]:not([href=#])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		headerHeight = $('#header').height();
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - headerHeight
			}, 500, function () {
				target.focus();
			});
			return false;
		}
	}
});


//табы слева в карточке товара
$(".product__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".product__box_" + tabVal).addClass("active");
	$(".product__box_" + tabVal).siblings(".product__box").removeClass("active");
});
//табы снизу в карточке товара
$(".card__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".card__box_" + tabVal).addClass("active");
	$(".card__box_" + tabVal).siblings(".card__box").removeClass("active");
});


// Попап дефолтный
let pop = $('.popup-1')
$('.popup__toggle-1').click(function () {
	pop.addClass('_active')
})
pop.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(pop).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	pop.removeClass('_active')
})
// Попап консультации
let pop2 = $('.popup-2')
$('.popup__toggle-2').click(function () {
	pop2.addClass('_active')
})
pop2.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(pop2).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	pop2.removeClass('_active')
})



// счетчик товара в карточке товара
let buttonCountPlus = document.getElementsByClassName("buttonCountPlus");
let buttonCountMinus = document.getElementsByClassName("buttonCountMinus");
let count = document.getElementsByClassName("buttonCountNumber");
let countPost = document.getElementsByClassName("num");

if (count) {
	var p;
	for (p = 0; p < buttonCountPlus.length; p++) {
		buttonCountPlus[p].addEventListener("click", function () {
			let itemCount = this.previousElementSibling.textContent;
			if (itemCount < 100) {
				itemCount++;
				this.previousElementSibling.innerHTML = itemCount;
				countPost.value = itemCount;
			}
		});
	}
	var m;
	for (m = 0; m < buttonCountMinus.length; m++) {
		buttonCountMinus[m].addEventListener("click", function () {
			let itemCount = this.nextElementSibling.textContent;
			if (itemCount > 1) {
				itemCount--;
				this.nextElementSibling.innerHTML = itemCount;
				countPost.value = itemCount;
			}
		});
	}
}


// Все попапы
const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	// настройки (не обязательно), см. API
});


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
if (selector.length > 0) {
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);
	let selector2 = document.querySelector('input[type="tel"]');
	selector2.addEventListener('input', function () {
		const re = /^\d*(\.\d+)?$/
	});
}


// отправка формы
$(document).ready(function () {
	$("form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize(),
		}).done(function () {
			document.location.href = "thanks.html";
			setTimeout(function () {
				// Выполнено
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// слайдер Swiper в карточках товаров
var cardsSwiper = new Swiper('.prod-card-thumb-slider', {
	slideToClickedSlide: false,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	preloadImages: false,
	lazy: true,
});


// слайдер Swiper в карточках товаров
var openingSwiper = new Swiper('.opening-slider', {
	slideToClickedSlide: false,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});


// слайдер Swiper специальных предложений
var specSwiper = new Swiper('.spec-slider', {
	slideToClickedSlide: false,
	slidesPerView: 4,
	spaceBetween: 20,
	simulateTouch: false,
	navigation: {
		nextEl: '.spec-swiper-button-next',
		prevEl: '.spec-swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		// when window width is >= 480px
		750: {
			slidesPerView: 3,
		},
		1100: {
			slidesPerView: 4,
		}
	}
});