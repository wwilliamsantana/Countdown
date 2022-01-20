const countdown = () => {
  const countDate = new Date('June 5, 2022 00:00:00').getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  let textDay = Math.floor(gap / day)
  let textHour = Math.floor((gap % day) / hour)
  let textMinute = Math.floor((gap % hour) / minute)
  let textSecond = Math.floor((gap % minute) / second)

  textDay = textDay < 10 ? '0' + textDay : textDay
  textHour = textHour < 10 ? '0' + textHour : textHour
  textMinute = textMinute < 10 ? '0' + textMinute : textMinute
  textSecond = textSecond < 10 ? '0' + textSecond : textSecond

  document.querySelector(
    '.countdown'
  ).innerHTML = `${textDay}:${textHour}:${textMinute}:${textSecond}`

  console.log(gap)
}

setInterval(countdown, 1000)
