document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".product-slider__swiper-small", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    new Swiper(".product-slider__swiper-big", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".product-slider__swiper-button-next",
            prevEl: ".product-slider__swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
})