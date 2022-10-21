function Onclick() {
  let abrir = document.querySelector('.Form')
  abrir.style.display = 'block'
}

function closemenu() {
  let close = document.querySelector('.Form')
  close.style.display = 'none'
}

function menuopen() {
  let openmenu = document.querySelector('.menu-mobile')
  if (openmenu.classList.contains('open')) {
    openmenu.classList.remove('open')
  } else {
    openmenu.classList.add('open')
  }
}

function closeagender() {
  let closeagender = document.querySelector('.container-agender')
  closeagender.style.display = 'none'
}

function openagender() {
  let openagender = document.querySelector('.container-agender')
  openagender.style.display = 'flex'
}
