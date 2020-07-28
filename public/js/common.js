"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
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
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		$(".link-modal").click(function () {
			var th = $(this);
			var modal = $(th.attr('href'));
			var content = {
				title: th.data('title'),
				text: th.data('text'),
				btn: th.data('btn'),
				order: th.data('order')
			};
			modal.find('.ttu').html(content.title);
			modal.find('.after-headline').html(content.text);
			modal.find('.btn').val(content.btn);
			modal.find('.order').val(content.order);
		});
	},
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	sendForm: function sendForm() {
		var gets = function () {
			var a = window.location.search;
			var b = new Object();
			var c;
			a = a.substring(1).split("&");

			for (var i = 0; i < a.length; i++) {
				c = a[i].split("=");
				b[c[0]] = c[1];
			}

			return b;
		}(); // form


		$("form").submit(function (e) {
			e.preventDefault();
			var th = $(this);
			var data = th.serialize();
			th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
			th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
			th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
			th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
			$.ajax({
				url: 'action.php',
				type: 'POST',
				data: data
			}).done(function (data) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#modal-thanks',
					type: 'inline'
				}); // window.location.replace("/thanks.html");

				setTimeout(function () {
					// Done Functions
					th.trigger("reset"); // $.magnificPopup.close();
					// ym(53383120, 'reachGoal', 'zakaz');
					// yaCounter55828534.reachGoal('zakaz');
				}, 4000);
			}).fail(function () {});
		});
	}
};

function eventHandler() {
	var _defaultSl;

	JSCCommon.inputMask();
	JSCCommon.sendForm();
	JSCCommon.modalCall();
	var defaultSl = (_defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 6
		},
		watchOverflow: true
	}, _defineProperty(_defaultSl, "spaceBetween", 0), _defineProperty(_defaultSl, "loop", true), _defaultSl);
	var swiper4 = new Swiper('.sGal__slider--js', _objectSpread(_objectSpread({}, defaultSl), {}, {
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
			slideShadows: false
		}
	}));
	setTimeout(function () {
		document.body.classList.remove('op0');
	}, 300); // modal window

	var wow = new WOW({
		mobile: false,
		animateClass: 'animate__animated'
	});
	wow.init();
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	}

	var controller = new ScrollMagic.Controller({
		container: "#main-wrapper",
		vertical: false
	});
	var width = $(window).width();
	var height = $(window).height();
	var offsetEl = height * .52;
	var durationEl = ($(window).height() - offsetEl) * 1.2;

	function animateElem() {
		var _TimelineMax;

		var controller = new ScrollMagic.Controller(); // define movement of panels

		var wipeAnimation = (_TimelineMax = new TimelineMax()).fromTo.apply(_TimelineMax, arguments); // in from left
		// create scene to pin and link animation


		new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: "onLeave",
			duration: "150%"
		}) // .setPin("#sBrendRepresent")
		.setTween(wipeAnimation) // .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	} //axilary funcs


	animateElem.call('#main-wrapper', '.animate-item--1', .1, {}, {
		y: 1250,
		x: width * .9
	});
	animateElem.call('#main-wrapper', '.animate-item--2', .1, {}, {
		y: 1370,
		x: width * .8
	});
	animateElem.call('#main-wrapper', '.animate-item--3', .1, {}, {
		rotation: 160,
		y: 1450,
		x: width * .5
	});
	animateElem.call('#main-wrapper', '.animate-item--4', .1, {}, {
		y: 1050,
		x: width * .7
	});
	animateElem.call('#main-wrapper', '.animate-item--5', .1, {}, {
		rotation: 260,
		y: 1200,
		x: width * 1.1
	});
	animateElem.call('#main-wrapper', '.animate-item--6', .1, {}, {
		rotation: 60,
		y: 1450,
		x: width * .5
	});
	animateElem.call('#main-wrapper', '.animate-item--7', .1, {}, {
		rotation: 360,
		y: 1450,
		x: width * 1.1
	});
	animateElem.call('#main-wrapper', '.animate-item--8', .1, {}, {
		rotation: 460,
		y: 1450,
		x: width * 1.1
	});
	animateElem.call('#main-wrapper', '.animate-item--9', .1, {}, {
		rotation: 460,
		y: 1350,
		x: width * .9
	});
	animateElem.call('#main-wrapper', '.animate-item--10', .1, {}, {
		rotation: 460,
		y: 1550,
		x: width * 1.1
	});
	animateElem.call('#main-wrapper', '.animate-item--11', .1, {}, {
		scale: 0.5,
		rotation: 220,
		y: 1180,
		x: width * .8
	});
	animateElem.call('#main-wrapper', '.animate-item--12', .1, {}, {
		scale: 0,
		rotation: 220,
		y: 1180,
		x: width * .8
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}