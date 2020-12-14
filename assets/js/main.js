const bg = document.querySelector('.pepsi')
const blackPepsi = document.querySelector('.black')
const redPepsi = document.querySelector('.red')
const whitePepsi = document.querySelector('.white')


const imageSlider = (anything) => {
  bg.src = anything
}

blackPepsi.addEventListener('click', () => imageSlider('assets/images/pepsi003.png'))
whitePepsi.addEventListener('click', () => imageSlider('assets/images/pepsi002.png'))
redPepsi.addEventListener('click', () => imageSlider('assets/images/pepsi001.png'))

// use a switch statment to pass in the values

