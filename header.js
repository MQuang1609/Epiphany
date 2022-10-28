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
    const tabActiveElement = document.querySelector('.products');
    // const featured = document.querySelector('.featured');
    tabActiveElement.classList.toggle('test');
    // featured.classList.toggle('test');
    const activeElement = document.querySelector('.active1');
    console.log(activeElement);
    activeElement.classList.remove('active1');
    const addActiveElement = document.querySelector(btn.getAttribute('data-TabId'));
    addActiveElement.classList.add('active1');
    // headerContent.classList.toggle('test');


}

for (const tabBtn of btn) {
    tabBtn.addEventListener('click', () => {
        handleChangeTab(tabBtn);
    })
}

