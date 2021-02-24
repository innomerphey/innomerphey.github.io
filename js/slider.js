const SLIDER_SELECTOR = '[data-slider]'

const config = {
  arrows: false,
  infinite: true,
  initialSlide: 1,
  speed: 1000,
  slidesToScroll: 2,
  variableWidth: true,
  centerMode: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 4000,
}

// eslint-disable-next-line import/prefer-default-export
export function init() {
  $(SLIDER_SELECTOR).slick(config)
}
