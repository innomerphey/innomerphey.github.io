$(document).ready(function () {

    //slider
    $('#slider').slick({
      arrows: false,
      initialSlide: 1,
      speed: 300,
      slidesToScroll: 2,
      // slidesToShow: 6,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      mobileFirst: true,
      // autoplay: true,
      // autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            centerPadding: '40px',
            // slidesToShow: 5
          }
        },

      ]

    })

    // Inline popups
    $('.form__submit').magnificPopup({
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
          this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
    });


  }
)
// ---------------------------------------------------------

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

// const buttonSubmit = document.querySelector('.form__submit')
//
// buttonSubmit.onSubmit = function (event) {
//   let target = event.target;
//   event.preventDefault();
//   let firstName, lastName, email;
//
//   firstName = document.getElementById('firstname');
//   lastName = document.getElementById('lastname');
//   email = document.getElementById('email');
//   alert(firstName.textContent);
// }
