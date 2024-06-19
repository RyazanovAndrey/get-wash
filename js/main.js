let inputField = document.querySelectorAll('.input-field')
let partnerBtn = document.querySelector('.partner-btn')
let popupWin = document.querySelector('.popup')
let closeBtn = document.querySelector('.close-btn')
let btnTop  = document.querySelector('.btn-top ')
let section = document.querySelectorAll('section')

let margBody = window.innerWidth - document.documentElement.clientWidth + 'px'

window.addEventListener('scroll', () => {
  let cirrentScroll = window.scrollY

  showBtnTop(cirrentScroll)
  activeLink(cirrentScroll)
})

// Popup

partnerBtn.addEventListener('click', () => {
  popupWin.classList.add('open')
  document.body.style.paddingRight = margBody
  document.body.classList.add('stop-scroll')
})

document.addEventListener('click', (event) => {
  if(event.target == popupWin || event.target == closeBtn) {
    document.body.style.paddingRight = '0px'
    popupWin.classList.remove('open')
    document.body.classList.remove('stop-scroll')
  }
})

// Active Link Section

function activeLink(cirrentScroll) {
  section.forEach(item => {
    if(cirrentScroll + 200 >= item.offsetTop) {
      let a = item.id
      document.querySelector('.active-link').classList.remove('active-link')
      document.querySelector(`[href="#${a}"]`).classList.add('active-link')
    }
  })
}

// Button Top 

function showBtnTop(cirrentScroll) {
  if(cirrentScroll >= document.documentElement.clientHeight) {
    btnTop.classList.add('show')
  }else {
    btnTop.classList.remove('show')
  }
}

// Form Validatiton

inputField.forEach(item => {
  item.addEventListener('blur', () => {

    let currentField = item.getAttribute('name')
    let currentValue = item.value

    let currentEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
    let currentPhone = /[0-9]{10}/
    
    switch(currentField) {
      case 'nameuser': 
        if(currentValue == '') {
          showError(item, 'Поле не може бути пустим!')
        }else if(currentValue.length <= 2) {
          showError(item, 'Зовсім мало символів!')
        }else {
          showValid(item)
        }
        break
      case 'emailuser':
        if(!currentEmail.test(currentValue)){
          showError(item, 'Перевірте правильність заповнення поля!')
        }else {
          showValid(item)
        }
        break
      case 'phoneuser':
        if(currentValue == '') {
          showError(item, 'Поле не може бути пустим!')
        }else if(!currentPhone.test(currentValue)) {
          showError(item, 'Перевірте правильність заповнення поля!')
        }else {
          showValid(item)
        }
        break
        default: 
          console.log('Error')
    }
  })
})

function showError(item, mes) {

  let parentBox = item.closest('.input-box')

  parentBox.classList.remove('valid-line')
  parentBox.classList.add('error-line')

  parentBox.nextElementSibling.innerText = mes

  errorValid(item, mes)
}

function errorValid(item) {
  item.addEventListener('input', () => {

      let parentBox = item.closest('.input-box')

      parentBox.classList.remove('error-line')
      parentBox.nextElementSibling.innerText = ''
  })
}

function showValid(item) {
  item.closest('.input-box').classList.add('valid-line')
  let a = item.closest('.input-box')
  a.nextElementSibling.innerText = ''
}

// Swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });