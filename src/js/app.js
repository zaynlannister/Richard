import '../scss/app.scss';

const subscribeInput = document.querySelector('.footer__actions-input input');
const subscribeButton = document.querySelector('.footer__actions-button button');

subscribeButton.addEventListener('click', handleSubscribe)

function handleSubscribe() {
    let email = subscribeInput.value;

    if (emailIsValid(email)) {
        subscribeUser(email)
    } else {
        alert('Enter valid email address!')
    }
}

function subscribeUser(email) {
    localStorage.setItem('subscribe_email', email);
    document.body.classList.add('subscribed');
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

window.addEventListener('DOMContentLoaded', DOMReady);

function DOMReady() {
    if (localStorage.getItem('subscribe_email')) {
        document.body.classList.add('subscribed');
    }
}

const mobileNavigationMenu = document.querySelector('.mobile__menu');
const mobileNavigationButton = document.querySelector('.mobile__menu-button');

mobileNavigationButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileNavigationMenu.classList.toggle('active')
}