window.addEventListener('load', function () {
  ScrollReveal().reveal('.animate1');
  ScrollReveal().reveal('.animate2', { delay: 100 });
  ScrollReveal().reveal('.animate3', { delay: 200 });
  ScrollReveal().reveal('.animate4', { delay: 300 });
  ScrollReveal().reveal('.animate5', { delay: 400 });
  ScrollReveal().reveal('.animate6', { delay: 500 });

  if (document.documentElement.clientWidth < 768) {
    menuButton = document.querySelector('.nav-button');
    nav = document.querySelector('nav');
    logo = document.querySelector('.logo');
    body = document.querySelector('body');
    link = document.querySelectorAll('.nav li');
    link.forEach(function (item, idx) {
      item.addEventListener('click', function () {
        body.classList.toggle('no-scroll');
        menuButton.classList.toggle('active__button');
        nav.classList.toggle('active__nav');
        logo.classList.toggle('active__logo');
      })
    });
    menuButton.addEventListener('click', function () {
      menuButton.classList.toggle('active__button');
      nav.classList.toggle('active__nav');
      logo.classList.toggle('active__logo');
      body.classList.toggle('no-scroll');
    });

    loadmoreButton = document.querySelector('.loadmore');
    content = document.querySelectorAll('.type__item:nth-child(n+4)')
    loadmoreButton.addEventListener('click', function () {
      loadmoreButton.classList.toggle('dnone');
      content.forEach(i => i.classList.toggle('type__item_active'));
    });

  }


  document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
  let inputs = document.querySelectorAll('#tel');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(inputs);
})
function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    message: document.getElementById("msg").value,
    tel: document.getElementById("tel").value
  };
  emailjs.send('service_letkm73', 'template_8eyfhrt', tempParams);
  popup = document.querySelector('#popup');
  popup.classList.toggle('popup_active');
  setTimeout(function () {
    popup.classList.toggle('popup_visualactive');
  }, 20);
  closepopup = document.querySelector('#closepopup');
  closepopup.addEventListener('click', function () {
    popup.classList.remove('popup_visualactive');
    document.getElementById("fromName").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("msg").value = "";
    setTimeout(function () {
      popup.classList.remove('popup_active');
    }, 1000);
  });
}