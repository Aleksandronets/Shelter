let katrineBtn = document.getElementById('katrine-btn');
let jenniferBtn = document.getElementById('jennifer-btn');
let woodyBtn = document.getElementById('woody-btn');
let sophiaBtn = document.getElementById('sophia-btn');
let timmyBtn = document.getElementById('timmy-btn');
let charlyBtn = document.getElementById('charly-btn');
let scarlettBtn = document.getElementById('scarlett-btn');
let freddieBtn = document.getElementById('freddie-btn');
let popUp = document.querySelector('.popup');
let btnClose = document.getElementById('popup-close');
let nameText = document.getElementById('name');
let typeBreed = document.getElementById('type');
let infoText = document.getElementById('info');
let imagePets = document.getElementById('image');
let ageList = document.getElementById('age');
let inoculationsList = document.getElementById('inoculations');
let diseasesList = document.getElementById('diseases');
let parasitesList = document.getElementById('parasites');

import {infoPopUp} from './info_popup.js';

const petsBtn = [
	katrineBtn,
	jenniferBtn,
	woodyBtn,
	sophiaBtn,
	timmyBtn,
	charlyBtn,
	scarlettBtn,
	freddieBtn,
];
for(let i = 0; i < petsBtn.length; i++) {
	petsBtn[i].addEventListener('click', () => showPopUp(i))
};

function showPopUp(petNumber){
	imagePets.src = infoPopUp[petNumber].imgPet;
	nameText.innerHTML = infoPopUp[petNumber].name;
	typeBreed.innerHTML = infoPopUp[petNumber].type;
	infoText.innerHTML = infoPopUp[petNumber].info;
	ageList.innerHTML = infoPopUp[petNumber].listInfo.age;
	inoculationsList.innerHTML = infoPopUp[petNumber].listInfo.inoculations;
	diseasesList.innerHTML = infoPopUp[petNumber].listInfo.diseases;
	parasitesList.innerHTML = infoPopUp[petNumber].listInfo.parasites;
	popUp.classList.toggle('show');
};

btnClose.addEventListener('click', closePopup);
function closePopup() {
	popUp.classList.remove('show');
};