/* eslint-disable object-curly-newline */

const navbarAnimate = () => {
  const t1 = gsap.timeline({ delay: 1 });
  const items = $('.nav-item');
  for (let i = 0; i < items.length; i += 1) {
    const item = items.eq(i);
    t1.fromTo(item, { opacity: 0, y: -50 }, { opacity: 1, duration: 0.5, y: 0 }, '<30%');
  }
  const t2 = gsap.timeline({ defaults: { duration: 0.75 } });
  const brand = $('.navbar-brand');
  t2.fromTo(brand, { opacity: 0 }, { opacity: 1, duration: 1 });
  t2.fromTo(brand, { x: -100 }, { x: 0 }, '<');
};

const carouselAnimate = () => {
  const imgs = $('.carousel-item > img');
  const captions = $('.carousel-caption');
  const texts = $('.carousel-text > p');
  const t1 = gsap.timeline({ defaults: { duration: 1 } });
  const t2 = gsap.timeline({ defaults: { duration: 0.75 } });
  t1.fromTo(imgs, { filter: 'blur(20px)' }, { filter: 'blur(0px) brightness(40%)' });
  t1.fromTo(captions, { filter: 'blur(20px)' }, { filter: 'blur(0px)', duration: 0.5 }, '<');
  t1.fromTo(imgs, { scale: 1.6 }, { scale: 1 });
  t1.fromTo('.scrollarrow', { opacity: 0, bottom: 400 }, { opacity: 1, bottom: 50, ease: 'bounce.out', duration: 3, delay: 1 }, '<50%');
  let gsapEnable = true;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const attributeValue = $(mutation.target).prop(mutation.attributeName);
      if (gsapEnable) {
        t2.fromTo(texts, { filter: 'blur(0px)', opacity: 1, y: 0 }, { filter: 'blur(20px)', opacity: 0, y: 150 });
        t2.fromTo(texts, { filter: 'blur(20px)', opacity: 0, y: -50 }, { filter: 'blur(0px)', opacity: 1, y: 0 });
        gsapEnable = false;
      }
      if (attributeValue === 'carousel-item') {
        gsapEnable = true;
      }
    });
  });
  const items = $('.carousel-item');
  for (let i = 0; i < items.length; i += 1) {
    observer.observe(items[i], {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  const hr = $('.carousel-text > hr');
  const t3 = gsap.timeline({ paused: true });
  t3.to(hr, { width: 0, duration: 0.3 });
  t3.to(hr, { width: '100%', duration: 1 });
  setTimeout(() => {
    t3.play();
  }, 1500);
  setInterval(() => {
    t3.reverse();
    setTimeout(() => {
      t3.play();
    }, 1000);
  }, 6000);
};
const showOznamy = () => {
  const oznamy = $('.oznamy > div');
  const topOfElement = oznamy.offset().top;
  const bottomOfElement = oznamy.offset().top + oznamy.outerHeight();
  let topOfScreen = $(window).scrollTop();
  let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
  const t1 = gsap.timeline({ paused: true });
  for (let i = 0; i < oznamy.length; i += 1) {
    const oznam = oznamy.eq(i);
    t1.fromTo(oznam, { opacity: 0, x: -500 }, { opacity: 1, duration: 1, x: 0 });
  }
  const moveElements = () => {
    if (bottomOfScreen > topOfElement && topOfScreen < bottomOfElement) {
      t1.play();
    }
  };
  $(window).on('scroll', () => {
    topOfScreen = $(window).scrollTop();
    bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
    moveElements();
  });
};
const animationExecute = (elements, func) => {
  const items = elements;
  let topOfElement = items.offset().top;
  let bottomOfElement = items.offset().top + items.outerHeight();
  let topOfScreen = $(window).scrollTop();
  let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
  let done = false;
  $(window).on('scroll', () => {
    topOfScreen = $(window).scrollTop();
    bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
    if (bottomOfScreen > topOfElement && topOfScreen < bottomOfElement) {
      if (!done) {
        func();
        done = true;
      }
    }
  });
};
const contactsAnimation = () => {
  const contacts = $('#kontakt');
  gsap.fromTo(contacts, { opacity: 0 }, { opacity: 1, duration: 5, delay: 1 });
  gsap.fromTo(contacts, { filter: 'blur(20px)' }, { filter: 'blur(0px)', duration: 3, delay: 1 });
};
const galeriaAnimation = () => {
  const galeria = $('.galeria');
  const t1 = gsap.timeline({ defaults: { duration: 2, ease: 'elastic.out(1, 0.3)' } });
  t1.fromTo('.galeria-text', { scale: 1.5 }, { scale: 1 });
  t1.fromTo(galeria, { height: '200px' }, { height: '80px' }, '<');
};

const clenoviaAnimation = () => {
  const clenovia = $('.clenovia');
  const clenoviaImg = $('#clenoviaImg');
  const clenoviaBtn = $('.clenovia-btn');
  const t1 = gsap.timeline({ delay: 1.5, defaults: { duration: 0.6 } });
  t1.fromTo(clenovia[0], { opacity: 0, x: -150 }, { opacity: 1, x: 0 });
  t1.fromTo(clenovia[1], { opacity: 0, x: -150 }, { opacity: 1, x: 0 });
  t1.fromTo(clenoviaBtn, { opacity: 0, x: -150 }, { opacity: 1, x: 0 });
  t1.fromTo(clenoviaImg, { opacity: 0 }, { opacity: 1 });
  t1.fromTo(clenoviaImg, { borderRadius: 0 }, { borderRadius: '5%' }, '<70%');
  t1.fromTo(clenoviaImg, { filter: 'saturate(0%)' }, { filter: 'saturate(100%)', duration: 2 });
};
const infoAnimation = () => {
  const info = $('#info');
  gsap.fromTo(info, { y: 500 }, { y: 0, duration: 1, delay: 1.8 });
  gsap.fromTo($('.otaznik'), { fontSize: 0 }, { fontSize: '2rem', ease: 'elastic.out(1, 0.3)', duration: 1, delay: 2.8 });
};
const footerAnimation = () => {
  const logo = $('#footerLogo');
  const text = $('#footerText');
  const link = $('#footerLink');
  const t1 = gsap.timeline({ delay: 1 }, { defaults: { duration: 1 } });
  gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  gsap.fromTo(logo, { y: -400 }, { y: 0, ease: 'bounce.out', duration: 2.5 });
  t1.fromTo(logo, { rotate: 360 }, { rotate: 30 });
  t1.fromTo(logo, { rotate: 30 }, { rotate: 0 });
  t1.fromTo(logo, { rotate: 0 }, { rotate: 10 });
  t1.fromTo(logo, { rotate: 10 }, { rotate: 0 });
  t1.to(text, { opacity: 1, duration: 1 });
  t1.fromTo(link, { opacity: 0 }, { opacity: 1, duration: 0.5, repeat: 3, yoyo: true, repeatDelay: 0.4 });
  t1.to(link, { fontSize: '1.05rem', opacity: 1, duration: 1 });
};

const showClenovia = () => {
  clenovia = $('#clenovia > .card');
  const t = [];
  for (let i = 0; i < clenovia.length; i++) {
    t[i] = gsap.timeline({ paused: true }, { defaults: { duration: 0.5 } });
    const element = clenovia.eq(i);
    let topOfElement = element.offset().top;
    let bottomOfElement = element.offset().top + element.outerHeight();
    let topOfScreen = $(window).scrollTop();
    let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
    let done = false;
    let wait = i * 800;
    const animation = () => {
      if (bottomOfScreen > topOfElement && topOfScreen < bottomOfElement) {
        if (!done) {
          if (i % 2 != 0) {
            t[i].fromTo(element, { x: -400 }, { x: 0 });
            t[i].fromTo(element, { opacity: 0 }, { opacity: 1 }, '<30%');
          } else {
            t[i].fromTo(element, { x: 400 }, { x: 0 });
            t[i].fromTo(element, { opacity: 0 }, { opacity: 1 }, '<30%');
          }
          setTimeout(() => {
            t[i].play();
          }, wait);
          done = true;
        }
      } else {
        element.css('opacity', '0');
        done = false;
        wait = 0;
      }
    };
    $(window).on('scroll', () => {
      topOfScreen = $(window).scrollTop();
      bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
      animation();
    });
    animation();
  }
};
