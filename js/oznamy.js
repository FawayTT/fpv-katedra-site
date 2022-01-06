$(function () {
  if (window.location.hash == '#summerhpc') {
    $(collapseOznam1).collapse('show');
  }
  if (window.location.hash == '#vyzva') {
    $(collapseOznam2).collapse('show');
  }
});
const oznamySaturate = () => {
  const card = $('.card');
  const t1 = gsap.timeline({ delay: 1 });
  for (let i = 0; i < card.length; i++) {
    const element = card[i];
    t1.to(element, { filter: 'saturate(100%)', duration: 0.75 });
  }
};

$(oznamySaturate());
$(navbarAnimate());
$(showClenovia());
$(animationExecute($('#footerLink'), footerAnimation));
VANTA.WAVES({
  el: '.bg-waves',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 500.0,
  minWidth: 500.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x1b242a,
});
