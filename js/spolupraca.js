VANTA.FOG({
  el: '.bg-fog',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0x222b31,
  midtoneColor: 0xd1ff,
  lowlightColor: 0x0,
  baseColor: 0x0,
  blurFactor: 0.15,
});

const partnersFadeIn = () => {
  $('.partners > h2').addClass('opacity-100');
  partners = $('.partners > .row');
  const t1 = gsap.timeline({ defaults: { duration: 1 }, delay: 1 });
  partners.each((e) => {
    t1.fromTo(partners[e], { opacity: 0 }, { opacity: 1 });
    t1.fromTo(partners[e], { filter: 'blur(40px)' }, { filter: 'blur(0px)' });
  });
};

$(navbarAnimate());
$(animationExecute($('#footerLink'), footerAnimation));
$(partnersFadeIn());
