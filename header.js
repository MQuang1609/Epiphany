const account = document.querySelector('#account');
const headerSub = document.querySelector('.header-sub');

account.addEventListener('click', () => {
    headerSub.classList.toggle('active_1');
})

const btn = document.querySelectorAll('.header-list-wrapper button');


// function activeContentTab(target) {
//     const tabActiveElement = document.querySelector('.product.active');
//     tabActiveElement.classList.remove('active');
//     const activetab = document.querySelector(target);
//     activetab.classList.add('active');
// }

function handleChangeTab(btn) {

    const activeElement = document.querySelector('.active2');

    activeElement.classList.remove('active2');
    const addActiveElement = document.querySelector(btn.getAttribute('data-TabId'));
    addActiveElement.classList.add('active2');
    const products = document.querySelector('.products');
    const test = document.querySelector('.featured');
    products.classList.toggle('test');
    test.classList.toggle('test');
    console.log(activeElement);


}

for (const tabBtn of btn) {
    tabBtn.addEventListener('click', () => {
        handleChangeTab(tabBtn);
    })
}

