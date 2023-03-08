const fullDate = new Date()
const getDate = fullDate.getDate()
const month = fullDate.toLocaleString('default', { month: 'long' })
const getYear = fullDate.getFullYear()
const inputDate = document.querySelector('.ms-cd-date p')
inputDate.innerHTML = `${getDate} ${month} ,${getYear}`