document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('*[data-buy-button]')
    if (!buyButtons || buyButtons.length === 0) {
        return
    }

    buyButtons.forEach(buyButton => {
        buyButton.addEventListener('click', () => {
            const counterInput = document.querySelector('*[data-textfield-type="counter"] input')
            const itemsCount = +(counterInput?.value || 1)
            console.log('itemsCount', itemsCount)
            const cartProducts = JSON.parse(Cookies.get('cartProducts') || '[]')
            cartProducts.push({
                productId: buyButton.getAttribute('data-product-id'),
                productCount: itemsCount
            })
            console.log('cartProducts', cartProducts)
            Cookies.set('cartProducts', JSON.stringify(cartProducts))

            // buyButton.innerText = 'Добавлено'
            // buyButton.disabled = true
             new Notify ({
                // title: 'Товар добавлен в корзину',
                text: 'Товар добавлен в корзину',
                autoclose: true,
                autotimeout: 5000,
                status: 'success',
                effect: 'slide',
                speed: 300,
                showIcon: true,
            })
        })
    })
})