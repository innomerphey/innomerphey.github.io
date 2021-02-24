const CONTENT_SELECTOR = '[data-popup-content]'
const NAME_SELECTOR = '[data-name]'
const SURNAME_SELECTOR = '[data-surname]'
const EMAIL_SELECTOR = '[data-email]'

const config = {
  items: {
    src: CONTENT_SELECTOR,
  },
  type: 'inline',
  removalDelay: 500,
  callbacks: {
    beforeOpen() {
      this.st.mainClass = 'mfp-zoom-in'
    },
  },
}

function update(user) {
  const { name, surname, email } = user

  const content = document.querySelector(CONTENT_SELECTOR)
  if (content) {
    $(NAME_SELECTOR).text(name)
    $(SURNAME_SELECTOR).text(surname)
    $(EMAIL_SELECTOR).text(email)
  } else {
    throw new Error(`No element with selector '${CONTENT_SELECTOR}' in the DOM`)
  }
}

// eslint-disable-next-line import/prefer-default-export
export function open(user) {
  update(user)
  $.magnificPopup.open(config)
}
