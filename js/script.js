const openMenu = document.querySelector('#btnMenuL');
const closeMenu = document.querySelector('#btnCloseMenu');
const menulateral = document.querySelector('#menuLatera');
// const fundoMenL = document.querySelector('#fundoMenL');
// const  = document.querySelector('#closeLateral');
// criar a parte do css hide

const toggleMenuLateral = () => {
    menulateral.classList.toggle('hidden');
    // fundoMenL.classList.toggle('hide');
}

[openMenu, closeMenu].forEach((el) => {
    el.addEventListener('click', () => toggleMenuLateral())
})
