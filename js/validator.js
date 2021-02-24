const FORM_SELECTOR = '[data-form]'

const config = {
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
      email: true,
    },
  },
  errorPlacement(error, element) {
    error.insertAfter(element.parent())
  },
}

// eslint-disable-next-line import/prefer-default-export
export function init(submitHandler) {
  config.submitHandler = submitHandler
  $(FORM_SELECTOR).validate(config)
}
