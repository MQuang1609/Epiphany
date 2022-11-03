const account = document.querySelector('#account');
const headerSub = document.querySelector('.header-sub');

account.addEventListener('click', () => {
    headerSub.classList.toggle('active_1');
})

const btn = document.querySelectorAll('.header-list-wrapper button');


// function activeContentTab(target) {
//     const tabActiveElement = document.querySelector('.products.active2');
//     tabActiveElement.classList.remove('active2');
//     const activetab = document.querySelector(target);
//     activetab.classList.add('active2');
// }

function handleChangeTab(btn) {
    console.log(btn);
    const activeElement = document.querySelector('.active2');
    activeElement.classList.remove('active2');
    const addActiveElement = document.querySelector(btn.getAttribute('data-TabId'));
    addActiveElement.classList.toggle('active2');
    const multiply = document.querySelector('.multiply');
    multiply.classList.toggle('active3');
    const allow = document.querySelector('.allow');
    allow.classList.toggle('active4');
    const products = document.querySelector('.products');
    products.classList.toggle('test');
    const test = document.querySelector('.featured');
    test.classList.toggle('test');
    console.log(activeElement);


}

for (const tabBtn of btn) {
    tabBtn.addEventListener('click', () => {
        handleChangeTab(tabBtn);
    })
}




// const test = document.querySelector('.test');
// test.addEventListener('click', () => {
//     const multiply = document.querySelector('.multiply');
//     multiply.classList.toggle('active3');
//     const allow = document.querySelector('.allow');
//     allow.classList.toggle('active4');
//     const activeElement = document.querySelector('.active2');
//     activeElement.classList.remove('active2');
//     const addActiveElement = document.querySelector(test.getAttribute('data-TabId'));
//     addActiveElement.classList.add('active2');
//     const products = document.querySelector('.products');
//     products.classList.toggle('test');
//     console.log(activeElement);
// })


// const test5 = document.querySelector('.test5');
// test5.addEventListener('click', () => {
//     const multiply = document.querySelector('.multiply');
//     multiply.classList.toggle('active3');
//     const allow = document.querySelector('.allow');
//     allow.classList.toggle('active4');
//     const activeElement = document.querySelector('.active2');
//     activeElement.classList.remove('active2');
//     const addActiveElement = document.querySelector(test5.getAttribute('data-TabId'));
//     addActiveElement.classList.add('active2');
//     const test = document.querySelector('.featured');
//     test.classList.toggle('test');
//     console.log(activeElement);
// })