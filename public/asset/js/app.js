const fullDate = new Date()
const getDate = fullDate.getDate()
const month = fullDate.toLocaleString('default', { month: 'long' })
const getYear = fullDate.getFullYear()
const inputDate = document.querySelector('.ms-cd-date p')
inputDate.innerHTML = `${getDate} ${month}, ${getYear}`

document.addEventListener('DOMContentLoaded', function(){
    const homeLoader = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p')
    homeLoader.style.backgroundColor = 'rgba(0,0,255,0.7)'
    const homeLoaderI = document.querySelector('.ms-cd-fixed-navbar-col-row-1 p a')
    homeLoaderI.style.color = '#fff'
})