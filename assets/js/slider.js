const s0 = document.querySelector('.s0')
const s1 = document.querySelector('.s1')
const s2 = document.querySelector('.s2')
const s3 = document.querySelector('.s3')
const s4 = document.querySelector('.s4')
const s5 = document.querySelector('.s5')
const s6 = document.querySelector('.s6')

const swiperOrderList = [s0, s1, s2, s3, s4, s5, s6]
const swiperClassList = [
  'swiper-0',
  'swiper-1',
  'swiper-2',
  'swiper-3',
  'swiper-4',
  'swiper-5',
  'swiper-6',
]

// this function is from
// https://juejin.cn/post/6973541673196322847
function handleTouchDir({ container, leftCb, rightCb }) {
  let box = document.querySelector(container) // 监听对象
  let startTime = '' // 触摸开始时间
  let startDistanceX = '' // 触摸开始X轴位置
  let startDistanceY = '' // 触摸开始Y轴位置
  let endTime = '' // 触摸结束时间
  let endDistanceX = '' // 触摸结束X轴位置
  let endDistanceY = '' // 触摸结束Y轴位置
  let moveTime = '' // 触摸时间
  let moveDistanceX = '' // 触摸移动X轴距离
  let moveDistanceY = '' // 触摸移动Y轴距离
  box.addEventListener('touchstart', (e) => {
    startTime = new Date().getTime()
    startDistanceX = e.touches[0].screenX
    startDistanceY = e.touches[0].screenY
  })
  box.addEventListener('touchend', (e) => {
    endTime = new Date().getTime()
    endDistanceX = e.changedTouches[0].screenX
    endDistanceY = e.changedTouches[0].screenY
    moveTime = endTime - startTime
    moveDistanceX = startDistanceX - endDistanceX
    moveDistanceY = startDistanceY - endDistanceY
    // 判断滑动距离超过40 且 时间小于500毫秒
    if (
      (Math.abs(moveDistanceX) > 40 || Math.abs(moveDistanceY) > 40) &&
      moveTime < 500
    ) {
      // 判断X轴移动的距离是否大于Y轴移动的距离
      if (Math.abs(moveDistanceX) > Math.abs(moveDistanceY)) {
        // return moveDistanceX > 0 ? 'left' : 'right'
        if (moveDistanceX > 0) {
          leftCb()
        } else {
          rightCb()
        }
      } else {
        // return moveDistanceY > 0 ? 'up' : 'down'
      }
    }
  })
}

swiperOrderList.forEach((swiper, i) => {
  swiper.classList.add(swiperClassList[i])
})

function leftCb() {
  console.log('left')
  const s = swiperOrderList.shift()
  swiperOrderList.push(s)
  swiperOrderList.forEach((swiper, i) => {
    swiperClassList.forEach((c) => {
      swiper.classList.remove(c)
    })
    swiper.classList.add(swiperClassList[i])
  })
}

function rightCb() {
  console.log('right')
  const s = swiperOrderList.pop()
  swiperOrderList.unshift(s)
  swiperOrderList.forEach((swiper, i) => {
    swiperClassList.forEach((c) => {
      swiper.classList.remove(c)
    })
    swiper.classList.add(swiperClassList[i])
  })
}

handleTouchDir({
  container: '.con',
  leftCb,
  rightCb,
})