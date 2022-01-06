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
$(navbarAnimate());
$(animationExecute($('#footerLink'), footerAnimation));
