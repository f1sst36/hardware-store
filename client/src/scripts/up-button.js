document.addEventListener("DOMContentLoaded", () => {
    const upButton = document.getElementById('layout-up-button');

    if (!upButton) return;

    upButton.addEventListener('click', () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    })

    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            upButton.classList.add('active');
        } else {
            upButton.classList.remove('active');
        }
    })
})