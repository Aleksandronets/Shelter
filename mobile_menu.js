let btn = document.getElementById('menu-burger');
let btnClosing = document.getElementById('burger-icon-body');
let menu = document.querySelector('.menu-burger-body');
let link = document.querySelector('.list-body');

function activeMenu(){
	menu.classList.toggle('active');
}
btnClosing.addEventListener('click', closePopup);

function closePopup() {
	menu.classList.remove('active');
};
btn.addEventListener('click', activeMenu);
link.addEventListener('click', activeMenu);

