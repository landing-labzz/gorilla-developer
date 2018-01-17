$(document).ready(function () {
  $('.next').click(function () {
    let currentImage = $('.img.curry');
    let currentImageIndex = $('.img.curry').index();
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = $('.img').eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');

    if (nextImageIndex == ($('.img:last').index()+1)) {
        $('.img').eq(0).fadeIn(1000);
        $('.img').eq(0).addClass('curry');
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass('curry');
    }
  });
  $('.prev').click(function () {
    let currentImage = $('.img.curry');
    let currentImageIndex = $('.img.curry').index();
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = $('.img').eq(prevImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');
    prevImage.fadeIn(1000);
    prevImage.addClass('curry');
});

});
