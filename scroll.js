/*==================Скролл к якорю=====================*/
/*=========событие скролла для отслеживания текущей прокрутки при повторном интервале=====*/
	var scrolMemory = 0;
	window.onscroll = function(){
		scrolMemory = window.pageYOffset || document.documentElement.scrollTop;
	}
	var menu = document.getElementById('menu');
	var offsetTopPx,
	scrollTOBY = 50;
	var timerId2;
/*========событие клика на меню сайта========*/
	menu.addEventListener('click', function(e){
		e = e || window.event;
		e.target;
		var section = document.getElementsByTagName('section');
		if(e.target.hasAttribute('href')){/*======Делегирование======*/
			e.preventDefault();
			for(var i = 0; i < section.length; i++){/*=======Перебор всех тегов Section=======*/
				if(section[i].id == e.target.getAttribute('href')){/*===получаю отступ с вверху, если id секции совпадает со значением аттрибута href=====*/
					offsetTopPx = section[i].offsetTop;
					if(scrolMemory < offsetTopPx){
							timerId2 = setInterval(function(){
							window.scrollBy(0, scrollTOBY);
							clearPovtor();
						},10);
					};
				};
			};
		};
	},false);
	function clearPovtor(){
		if(scrolMemory >= offsetTopPx - 50){
			clearInterval(timerId2);
			console.log('aa')
		};
	}
