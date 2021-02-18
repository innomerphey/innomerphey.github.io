$(document).ready(function () {

    //slider
    $('#slider').slick({
      arrows: false,
      infinite: true,
      initialSlide: 1,
      speed: 1000,
      slidesToScroll: 2,
      // slidesToShow: 6,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      // mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 2000,
      // responsive: [
      //   {
      //     breakpoint: 1920,
      //     settings: {
      //       centerPadding: '40px',
      //       // slidesToShow: 5
      //     }
      //   },
      //
      // ]

    })

    //form validator
    $('[data-form]').validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        lastname: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true
        },
      },
      errorPlacement: function (error, element) {
        error.insertAfter(element.parent())
      },
      submitHandler: function () {
        saveFormData()
        updatePopupContentNode()
        openPopup()
      }
    })

    // popups


  }
)
// ==========================================================


const PRICE_MIN = 1200
const PRICE_MAX = 4599
const MAX_SPREAD = 0.8

const bidElement = document.querySelector('[data-bid]')
const askElement = document.querySelector('[data-ask]')

function randFloat(a, b) {
  return Math.random() * (b - a) + a
}

const bid = randFloat(PRICE_MIN, PRICE_MAX)

bidElement.innerText = bid.toFixed(2)
askElement.innerText = (bid + randFloat(0, MAX_SPREAD)).toFixed(2)

// ---------------------------------------------------------

function openPopup() {
  $.magnificPopup.open({
    items: {
      src: '#popup-content',
    },
    type: 'inline',
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = 'mfp-zoom-in'
      }
    },
    disableOn: function () {
      // return validator.form()
      return true
    },
  })

}

const NAME_KEY = 'name'
const LASTNAME_KEY = 'last_name'
const EMAIL_KEY = 'email'

function saveFormData() {

  let [name, lastName, email] = [
    document.querySelector('#name').value,
    document.querySelector('#lastname').value,
    document.querySelector('#email').value
  ]

  sessionStorage.setItem(NAME_KEY, name)
  sessionStorage.setItem(LASTNAME_KEY, lastName)
  sessionStorage.setItem(EMAIL_KEY, email);

  [name, lastName, email] = [
    sessionStorage.getItem(NAME_KEY),
    sessionStorage.getItem(LASTNAME_KEY),
    sessionStorage.getItem(EMAIL_KEY)
  ]

  console.log(name, lastName, email)

}

function updatePopupContentNode() {

  const popupContent = document.querySelector('#popup-content')
  if (popupContent) {
    const name = sessionStorage.getItem(NAME_KEY)
    const lastname = sessionStorage.getItem(LASTNAME_KEY)
    const email = sessionStorage.getItem(EMAIL_KEY)

    $('[data-name]').text(name)
    $('[data-lastname]').text(lastname)
    $('[data-email]').text(email)
  }

}




