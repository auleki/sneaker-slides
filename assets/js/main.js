const bg = document.querySelector('.pepsi')
const bgColor = document.querySelector('.sec')
const blackPepsi = document.querySelector('.black')
const bluePepsi = document.querySelector('.red')
const whitePepsi = document.querySelector('.white')

const colorList = {
  blue: '#0062be',
  red: '#e60c26',
  black: '#1e1e1e'
}

const imageSlider = (anything) => {
  bg.src = anything
}

const changeColor = (color) => {
  bgColor.style.background = color
}

blackPepsi.addEventListener('click', () => {
  imageSlider('assets/images/pepsi003.png')
  changeColor(colorList.black)
})
whitePepsi.addEventListener('click', () => {
  imageSlider('assets/images/pepsi002.png')
  changeColor(colorList.red)
})
bluePepsi.addEventListener('click', () => {
  imageSlider('assets/images/pepsi001.png')
  changeColor(colorList.blue)
})

// use a switch statment to pass in the values

