import * as popup from './popup'

// eslint-disable-next-line import/prefer-default-export
export function submitHandler() {
  const name = $('#name').val()
  const surname = $('#lastname').val()
  const email = $('#email').val()
  popup.open({ name, surname, email })
}
