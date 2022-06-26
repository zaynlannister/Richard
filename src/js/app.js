import '../scss/app.scss';

let domElements = {
    subButton: document.querySelector('.footer__actions-button button'),
    container: document.querySelector('.footer__actions')
}

if (localStorage.getItem('follower')) {
    changeContent(domElements.container, `<div class="footer__actions-sub-text">Спасибо за подписку!</div>`);
}

domElements.subButton.addEventListener('click', () => {
    changeContent(domElements.container, `<div class="footer__actions-sub-text">Спасибо за подписку!</div>`);
    localStorage.setItem('follower', 'true')
})

function changeContent(element, data) {
    element.innerHTML = data;
}