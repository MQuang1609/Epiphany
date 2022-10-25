const account = document.querySelector('#account');
const headerSub = document.querySelector('.header-sub');

account.addEventListener('click', () => {
    console.log('abc');
    headerSub.classList.toggle('active');
})