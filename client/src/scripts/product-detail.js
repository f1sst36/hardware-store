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

    const buyButton = document.getElementById('buy-button')
    if(!buyButton) return

    buyButton.addEventListener('click', () => {
        const counterInput = document.querySelector('*[data-textfield-type="counter"] input')
        const itemsCount = counterInput.value || 1
        Cookies.set('cartProductIds', JSON.stringify([1, 2, 3]))
        console.log(JSON.parse(Cookies.get('cartProductIds')))
        // let cartProductIds = null
        // try {
        //     cartProductIds = JSON.parse(localStorage.getItem('cartProductIds'))
        // }catch(e) {}
        //
        // if(!cartProductIds) {
        //     cartProductIds = []
        // }
        //
        // cartProductIds.push(productId)
    })
})