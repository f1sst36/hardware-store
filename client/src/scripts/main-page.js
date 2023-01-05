document.addEventListener('DOMContentLoaded', () => {
    new Swiper("#main-slider", {
        navigation: {
            nextEl: "#main-slider-button-next",
            prevEl: "#main-slider-button-prev",
        },
    });
})