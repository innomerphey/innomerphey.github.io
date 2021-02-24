import * as validator from './validator'
import * as slider from './slider'
import * as price from './price'
import { submitHandler } from './form'

$(document).ready(function () {
  price.update()
  slider.init()
  validator.init(submitHandler)
})
