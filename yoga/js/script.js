window.addEventListener('DOMContentLoaded', function() {

  // TABS
  let tab = document.getElementsByClassName('info-header-tab');
  let tabContent = document.getElementsByClassName('info-tabcontent');
  let info = document.getElementsByClassName('info-header')[0];

  function hideTabcontent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabcontent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabcontent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(event) {
    let target = event.target;
    if (target.className == 'info-header-tab') {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  })

  //TIMER
  const DEADLINE = '2025-11-6';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  function setClock(id, endtime) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector('.hours');
    let minutes = timer.querySelector('.minutes');
		let seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        clearInterval(timeInterval);
      }
    }

  };
  setClock('timer', DEADLINE);

  //SCROLL
  // menu = document.getElementsByTagName('nav')[0];

  // menu.addEventListener('click', (event) => {
  //   event.preventDefault();

  //   function animate(draw, duration) {
  //     let start = performance.now();
	// 		duration = duration || 1000;
  //     requestAnimationFrame(function animate(time) {
  //       let timePassed = time - start;

  //       if (timePassed > duration) {
  //         timePassed = duration;
  //       }
  //       draw(timePassed);

  //       if (timePassed < duration) {
  //         requestAnimationFrame(animate);

  //       }
  //     });
  //   };

	// 	function getTargetLink() {
	// 		if (event.target.hasAttribute('href')) return event.target.getAttribute('href');
	// 	}
	// 	function getTargetLinkId() {
	// 		if(targetLink) return targetLink.slice(1);
	// 	}		
	// 	let targetLink = getTargetLink();
  //   let idToScroll = document.querySelectorAll('*[id]');
	// 	let targetLinkId = getTargetLinkId();

  //   for (let i = 0; i < idToScroll.length; i++) {
  //     let idToScrollThis = idToScroll[i];
  //     if (targetLinkId === idToScrollThis.id) {
  //       animate(function () {
  //         window.scrollBy(0, (idToScrollThis.getBoundingClientRect().top - 100) / 20)
  //       }, 500);
  //     }
  //   }
  // });


  // MODAL
  (function() {
    let modalContent = document.querySelector('.popup');
    let modalOverlay = document.querySelector('.overlay');
    let modalOpen = document.querySelectorAll('.more, .description-btn');
    let modalClose = document.querySelector('.popup-close');

    modalContent.addEventListener('click', function() {
      event.stopPropagation();
    })

    for (let i = 0; i < modalOpen.length; i++) {
      modalOpen[i].addEventListener('click', function () {
        modalOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
      })
    }  

    modalClose.addEventListener('click', function () {
      event.stopPropagation();
      modalOverlay.style.display = 'none';
      document.body.style.overflow = '';
    })

    modalOverlay.addEventListener('click', function() {
      this.style.display = 'none';
      document.body.style.overflow = '';
    })

  }());

  // FORM SEND
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо!";
	message.failure = "Что-то пошло не так.";

	let form = document.querySelector('.main-form');
	let input = document.getElementsByTagName('input');
	let statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		// Ajax
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php')

		// Задаем кодировку 
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 

		// Получаем данные из формы
		let formData = FormData;

		// Отправляем данные на сервер
		request.send(formData);

		// Отслеживаем статус готовности передачм данных
		request.onreadystatechange = function() {
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					// Здесь добавляем контент на страницу
					statusMessage.innerHTML = message.success;
				}
			} else {
				statusMessage.innerHTML = message.failure;
			} 
		}

		// Очистить инпуты от данных
		for (let i = 0; i < input.length; i++) {
			input[i].value = "";
		}

	});

  // SLIDER
  let slideIndex = 1;
  let slides = document.querySelectorAll('.slider-item');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let dotsWrap = document.querySelector('.slider-dots');
  let dots = document.querySelectorAll('.dot');

  // Сразу вызываем функцию showSlides() для отображения первого слайда
  showSlides(slideIndex);

  // Функция отображения элементов слайдера
  function showSlides(n) { // n - slideIndex (кол-во слайдов)

    // Когда кликаем на кнопку next на последнем слайде:
    if ( n > slides.length ) { // Если n больше кол-ва слайдов, ...
      slideIndex = 1; // перематываемся к первому слайду
    };

    // Когда кликаем на кнопку prev на первом слайде:
    if (n < 1) { // Если n меньше единицы, ...
      slideIndex = slides.length; // перематываемся к последнему слайду
    };

    // Скрываем слайды
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    // Отображаем первый слайд
    slides[slideIndex - 1].style.display = 'block';

    // Убираем активный класс у dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('dot-active');
    }
    // Добавляем активный класс у первого dots
    dots[slideIndex - 1].classList.add('dot-active');

  }

  // Функция перелистываня слайдов
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  next.addEventListener('click', function() {
    plusSlides(1);
  })

  prev.addEventListener('click', function () {
    plusSlides(-1);
  })

});