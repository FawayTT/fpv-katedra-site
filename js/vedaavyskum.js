VANTA.GLOBE({
  el: '.bg-globe',
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x7f7f7f,
  backgroundColor: 0xffffff,
});

const mainAnimate = () => {
  const page = $('.vedaavyskum');
  const rows = $('.vedaavyskum > .row');
  page.addClass('opacity-100');
  let i = 0;
  const li = $('.list-group > li');
  const t1 = gsap.timeline({ defaults: { duration: 1 }, delay: 1 });
  for (let i = 0; i < li.length; i++) {
    li.eq(li.length - 1 - i).css('z-index', i + 10);
  }
  let top = 0;
  li.each((e) => {
    t1.fromTo(li[e], { y: top }, { y: 0 });
    top -= 49;
  });
  t1.fromTo(rows, { opacity: 0 }, { opacity: 1 });
  t1.fromTo(rows, { y: -50 }, { y: 0 }, '<10%');
};

$(navbarAnimate());
$(animationExecute($('#footerLink'), footerAnimation));
$(mainAnimate());
