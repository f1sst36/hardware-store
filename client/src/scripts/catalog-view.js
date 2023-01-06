document.addEventListener("DOMContentLoaded", () => {
    const PRODUCT_LIST_CLASSNAME = "catalog__list";

    const CARD_MODIFY = "product-card--card";
    const INLINE_MODIFY = "product-card--inline";

    const LIST_CARD_MODIFY = "catalog__list--card";
    const LIST_INLINE_MODIFY = "catalog__list--inline";

    const VIEW_CARD_BUTTON_ID = "view-card-button";
    const VIEW_INLINE_BUTTON_ID = "view-inline-button";

    const viewCardButton = document.getElementById(VIEW_CARD_BUTTON_ID);
    const viewInlineButton = document.getElementById(VIEW_INLINE_BUTTON_ID);

    if (!viewCardButton || !viewInlineButton) return;

    const handleClick = ({
                             removeClassName,
                             addClassName
                         }) => {
        const productList = document.getElementsByClassName(PRODUCT_LIST_CLASSNAME)[0];

        if (!productList) return;

        if(addClassName === CARD_MODIFY) {
            viewInlineButton.classList.remove('active')
            viewCardButton.classList.add('active');

            productList.classList.remove(LIST_INLINE_MODIFY)
            productList.classList.add(LIST_CARD_MODIFY)
        } else {
            viewInlineButton.classList.add('active')
            viewCardButton.classList.remove('active');

            productList.classList.add(LIST_INLINE_MODIFY)
            productList.classList.remove(LIST_CARD_MODIFY)
        }

        for (let i = 0; i < productList.children.length; i++) {
            productList.children[i].classList.remove(removeClassName);
            productList.children[i].classList.add(addClassName);
        }
    }


    viewCardButton.addEventListener('click', (e) => handleClick({
        removeClassName: INLINE_MODIFY,
        addClassName: CARD_MODIFY
    }))

    viewInlineButton.addEventListener('click', (e) => handleClick({
        removeClassName: CARD_MODIFY,
        addClassName: INLINE_MODIFY
    }))
})