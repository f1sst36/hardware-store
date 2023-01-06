document.addEventListener('DOMContentLoaded', () => {
    new Swiper("#main-slider", {
        loop: true,
        navigation: {
            nextEl: "#main-slider-button-next",
            prevEl: "#main-slider-button-prev",
        },
    });
})