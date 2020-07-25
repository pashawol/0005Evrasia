const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
		$(".link-modal").click(function () {
			let th = $(this);
			let modal = $(th.attr('href'));
			let content = {
				title: th.data('title'),
				text: th.data('text'),
				btn: th.data('btn'),
				order: th.data('order')
			}
			modal.find('.ttu').html(content.title);
			modal.find('.after-headline').html(content.text);
			modal.find('.btn').val(content.btn);
			modal.find('.order').val(content.order);
		})
	},
  
};

function eventHandler() { 
	JSCCommon.modalCall();
  
  
	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 6,
		},
		watchOverflow: true,
		spaceBetween: 0,
		loop: true,
		
	}
	
	const swiper4 = new Swiper('.sGal__slider--js', {
		// slidesPerView: 5,
		...defaultSl,
		effect: 'coverflow',
		spaceBetween: 0,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			// stretch: -60,
			depth: 350,
			modifier: 1,
			slideShadows: false,
		},

	});
	setTimeout(() => {
		
		document.body.classList.remove('op0');
	}, 300);
	// modal window
	var wow = new WOW({
		mobile: false,
		animateClass: 'animate__animated',
	});
	wow.init();
  

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}

	var controller = new ScrollMagic.Controller({
		container: "#main-wrapper", vertical: false
	});
	var width = $(window).width(); 
	var height = $(window).height(); 
	let offsetEl = height * .52
	var durationEl = ($(window).height() - offsetEl) * 1.2;


	function animateElem() {
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo(...arguments) // in from left

		// create scene to pin and link animation
		new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: "onLeave",
			duration: "150%"
		})
			// .setPin("#sBrendRepresent")
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}

	//axilary funcs
	animateElem.call('#main-wrapper', '.animate-item--1', .1, {}, { y: 1250, x: width * .9 });
	animateElem.call('#main-wrapper', '.animate-item--2', .1, {}, { y:  1370, x: width * .8 });
	animateElem.call('#main-wrapper', '.animate-item--3', .1, {}, { rotation: 160, y: 1450, x: width * .5 });
	animateElem.call('#main-wrapper', '.animate-item--4', .1, {}, { y: 1050, x: width * .7 });
	animateElem.call('#main-wrapper', '.animate-item--5', .1, {}, { rotation: 260,y: 1200, x: width * 1.1 });
	animateElem.call('#main-wrapper', '.animate-item--6', .1, {}, { rotation: 60, y: 1450, x: width * .5 });
	animateElem.call('#main-wrapper', '.animate-item--7', .1, {}, { rotation: 360, y: 1450, x: width * 1.1 });
	animateElem.call('#main-wrapper', '.animate-item--8', .1, {}, { rotation: 460, y: 1450, x: width * 1.1 });
	animateElem.call('#main-wrapper', '.animate-item--9', .1, {}, { rotation: 460, y: 1350, x: width * .9 });
	animateElem.call('#main-wrapper', '.animate-item--10', .1, {}, { rotation: 460, y: 1550, x: width * 1.1 });
	animateElem.call('#main-wrapper', '.animate-item--11', .1, {}, { scale: 0.5, rotation: 220, y: 1180, x: width * .8 });
	animateElem.call('#main-wrapper', '.animate-item--12', .1, {}, { scale: 0, rotation: 220, y: 1180, x: width * .8 });
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
