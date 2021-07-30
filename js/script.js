const hamburger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.menu__overlay'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link');

      
function addClass () {
    menu.classList.add('active');
    hamburger.classList.add('visible');
}

hamburger.addEventListener('click', addClass);

function removeClass () {
    menu.classList.remove('active');
    hamburger.classList.remove('visible');
}

closeMenu.addEventListener('click', removeClass);
overlay.addEventListener('click', removeClass);
menuLink.forEach(item => {
    item.addEventListener('click', removeClass);
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
      line = document.querySelectorAll('.skills__line span');

counters.forEach((item, i) => {
    line[i].style.width = item.innerHTML; 
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

const titleEmail = document.getElementById('title-email'),
      linkEmail = document.getElementById('link-email'),
      titleEmailHidden = document.querySelector('.contacts__email'),
      titlePhone = document.getElementById('title-phone'),
      titleOperator = document.querySelector('.contacts__operator'),
      linkPhone = document.getElementById('link-phone'),
      textVisible = document.querySelector('.contacts__text-visible'),
      textHidden = document.querySelector('.contacts__text-hidden');

linkEmail.addEventListener('mouseover', () => {
  titleEmail.classList.add('hidden');
  titleEmailHidden.classList.add('visible');
});

linkEmail.addEventListener('mouseout', () => {
  titleEmail.classList.remove('hidden');
  titleEmailHidden.classList.remove('visible');
});

linkPhone.addEventListener('mouseover', () => {
  titlePhone.classList.add('hidden');
  titleOperator.classList.add('visible');
});

linkPhone.addEventListener('mouseout', () => {
  titlePhone.classList.remove('hidden');
  titleOperator.classList.remove('visible');
});

textVisible.addEventListener('click', () => {
  textHidden.classList.toggle('visible');
  textVisible.classList.toggle('hidden');
});

