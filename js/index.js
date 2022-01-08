$(navbarAnimate(), carouselAnimate(), showOznamy());
$(animationExecute($('#kontakt'), contactsAnimation));
$(animationExecute($('.galeria'), galeriaAnimation));
$(animationExecute($('.clenovia-btn'), clenoviaAnimation));
$(animationExecute($('#footerLink'), footerAnimation));
$(galeriaAnimation());
$(showClenovia());

const imageViewer = () => {
  const viewer = $('#imageViewer');
  const viewerBG = $('#imageViewer .backdrop');
  const image = $('.image-container > .image-center');
  const previousBtn = $('.image-container > .previous-btn');
  const nextBtn = $('.image-container> .next-btn');
  let t = 0;
  viewerBG.on('click', () => {
    viewer.fadeOut(500);
    t = 0;
  });
  const images = $('.gallery-image > img');
  for (let i = 0; i < images.length; i++) {
    const element = images.eq(i);
    element.on('click', () => {
      t = i;
      image.prop('src', element.attr('src'));
      viewer.fadeIn(500);
    });
  }
  previousBtn.on('click', () => {
    t -= 1;
    image.fadeOut(200, () => {
      image.prop('src', images.eq(t).attr('src'));
    });
    image.fadeIn(200);
  });
  nextBtn.on('click', () => {
    t += 1;
    if (t == images.length) {
      t = 0;
    }
    /*     console.log(t); */
    image.fadeOut(200, () => {
      image.prop('src', images.eq(t).attr('src'));
    });
    image.fadeIn(200);
  });
};

$(imageViewer());
