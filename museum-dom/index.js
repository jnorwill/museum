
const burgerMenuImg = document.querySelector('.burger-menu-img')
const burgerMenu = document.querySelector('.burger-menu')
const ticketsForm = document.querySelector('.tickets__form')
const buttonClose = document.querySelector('.booking-tickets__close')
const buttonOpen = document.querySelector('.form__submit')
const elemTicketContainer = document.querySelector('.booking-tickets-container')
const elemTicketElem = document.querySelector('.booking-tickets')


burgerMenuImg.addEventListener('click', () => {
  burgerMenuImg.classList.toggle('open')
  burgerMenu.classList.toggle('burger-menu-open')
  document.querySelector('.welcome__text-container').classList.toggle('welcome__text-container_opacity')
  document.querySelector('.welcome').classList.toggle('welcome-hidden')
});

ticketsForm.addEventListener('submit', (event) => { event.preventDefault(); })
elemTicketContainer.onclick = function (event) {
  let target = event.target;
  event.preventDefault();
  if (target.classList.contains('booking-tickets__close')) {
    elemTicketContainer.classList.add('none');
  } else if (target.classList.contains('booking-tickets-container')) {
    elemTicketContainer.classList.add('none');
  }
  else return
}
buttonOpen.addEventListener('click', (event) => { elemTicketContainer.classList.remove('none') });

const sliderGalleryImg = document.querySelector('.welcome-slider__gallery-container')
const sliderGalleryImgArr = document.querySelectorAll('.welcome-slider__gallery-slide')
const sliderArrowLeft = document.querySelector('.welcome-slider__arrow_left')
const sliderArrowRight = document.querySelector('.welcome-slider__arrow_right')

let i = 1
const moveBeigeSquares = () => {
  sliderGalleryImg.style.transform = `translateX(calc(-100% * ${i - 1}))`

  const sliderSquareBeige = document.querySelector('.squares__square_beige')

  sliderSquareBeige.classList.remove('squares__square_beige')

  const sliderSquare = document.querySelector(`.squares__square[data-number="${i}"]`)

  sliderSquare.classList.add('squares__square_beige')

  console.log(i)

}
let currentNumbersInPagination = document.querySelector('.welcome-slider__numbers_current')
const changingNumbersInPagination = () => {
  currentNumbersInPagination.innerHTML = `0${i}`

  console.log(currentNumbersInPagination)
}
sliderArrowRight.addEventListener('click', (event) => {
  i++
  if (i === sliderGalleryImgArr.length + 1) {
    i = 1
  }
  moveBeigeSquares()
  changingNumbersInPagination()
});
sliderArrowLeft.addEventListener('click', () => {
  i--
  if (i < 1) {
    i = sliderGalleryImgArr.length
  }
  moveBeigeSquares()
  changingNumbersInPagination()
});

const welcomeSliderSquares = document.querySelector('.welcome-slider__squares')
welcomeSliderSquares.addEventListener('click', (event) => {
  const index = event.target.dataset.number
  if (index >= 0) {
    i = index
    moveBeigeSquares()
    changingNumbersInPagination()
  }

})
const sliderVideoCenterButtonPlay = document.querySelector('.video-slider__center-play')
const sliderVideoButtonPlay = document.querySelector('.video-slider__button_play')
// const sliderVideoPagination = document.querySelector('.video-slider__line_time')
// const sliderVideoCurrentTime = document.querySelector('.range__current-line_time')
const sliderVideoButtonFullscreen = document.querySelector('.video-slider__button_fullscreen')
const sliderVideoButtonVolume = document.querySelector('.video-slider__button_volume')
const sliderVideoAllVolume = document.querySelector('.video-slider__line_volume')
const sliderVideoCurrentVolume = document.querySelector('.range__current-line_volume')

const sliderVideoSlideMain = document.querySelector('.video-slider__list-slide-main')
const sliderVideoSlideArr = document.querySelectorAll('.video-slider__list-slide')
const sliderVideoSlideContainer = document.querySelector('.video-slider__list-container')

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('slider-player', {
    videoId: 'Vi5D6FKhRmo',
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'rel': 0,
      'fs': 0,
    }
  });
}

sliderVideoButtonPlay.addEventListener('click', (event) => {
  if (sliderVideoButtonPlay.classList.contains('video-slider__button_play-focus')) {
    player.pauseVideo()
    sliderVideoButtonPlay.classList.remove('video-slider__button_play-focus')
    sliderVideoCenterButtonPlay.style.display = 'block'
  } else {
    player.playVideo()
    sliderVideoButtonPlay.classList.add('video-slider__button_play-focus')
    sliderVideoCenterButtonPlay.style.display = 'none'
  }
})
sliderVideoCenterButtonPlay.addEventListener('click', (event) => {
  if (sliderVideoButtonPlay.classList.contains('video-slider__button_play-focus')) {
    return
  } else {
    player.playVideo()
    sliderVideoButtonPlay.classList.add('video-slider__button_play-focus')
    sliderVideoCenterButtonPlay.style.display = 'none'
  }
})

const muveVolume = (event) => {
  const elemWidth = event.pageX - Math.round(sliderVideoCurrentVolume.getBoundingClientRect().left)
    sliderVideoCurrentVolume.style.width = `${elemWidth}px`
    if (elemWidth === 0) {
      sliderVideoButtonVolume.classList.add('video-slider__button_volume-focus')
    }
  }
sliderVideoAllVolume.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', muveVolume)
})

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', muveVolume)
})

sliderVideoButtonVolume.addEventListener('click', () => {
  if (sliderVideoButtonVolume.classList.contains('video-slider__button_volume-focus')) {
    player.unMute()
    sliderVideoButtonVolume.classList.remove('video-slider__button_volume-focus')
  } else {
    player.mute()
    sliderVideoButtonVolume.classList.add('video-slider__button_volume-focus')
  }
})



const sliderVideoArrowLeft = document.querySelector('.video-slider-pagination__arrow_left')
const sliderVideoArrowRight = document.querySelector('.video-slider-pagination__arrow_right')
const slideWidth = document.querySelector('.video-slider__list-slide').offsetWidth
const slideMarginRight = parseFloat(getComputedStyle(document.querySelector('.video-slider__list-slide')).marginRight)
let n = 1
sliderVideoSlideContainer.style.transform = `translateX(-${(slideWidth + slideMarginRight)}px)`
const moveVideoPoint = () => {
  sliderVideoSlideContainer.style.transform = `translateX(-${(slideWidth + slideMarginRight) * n}px)`

  const sliderVideoPointSelected = document.querySelector('.video-slider-pagination__point_selected')

  sliderVideoPointSelected.classList.remove('video-slider-pagination__point_selected')

  const sliderVideoPoint = document.querySelector(`.video-slider-pagination__point[data-video="${n}"]`)

  sliderVideoPoint.classList.add('video-slider-pagination__point_selected')


}
sliderVideoArrowRight.addEventListener('click', () => {
  n++
  if (n === sliderVideoSlideArr.length) {
    n = 1
  }
  moveVideoPoint()
  console.log(n)
})
sliderVideoArrowLeft.addEventListener('click', () => {
  n--
  if (n === 0) {
    n = sliderVideoSlideArr.length - 1
  }
  console.log(n)
  moveVideoPoint()
})
const sliderVideoPagination = document.querySelector('.video-slider-pagination')
sliderVideoPagination.addEventListener('click', (event) => {
  const index = event.target.dataset.video
  if (index > 0) {
    n = index
    moveVideoPoint()

  }
})



