//sessionstorage for contact details
const local = JSON.parse(sessionStorage.getItem('formDetails'))
const js = Array.from(local)
//fullname
const names = document.querySelector('.name p:last-child')
names.innerHTML = `${js[0].fullname}`
//phonenumber
const phone = document.querySelector('.phone-number p:last-child')
phone.innerHTML = `${js[0].phonenumber}`
//pickupaddress
const pick_add = document.querySelector('.pickup-address p:last-child')
pick_add.innerHTML = `${js[0].pickupaddress}`
//emailaddress
const email = document.querySelector('.email p:last-child')
email.innerHTML = `${js[0].emailaddress}`
//receivername
const rec_name = document.querySelector('.receiver-name p:last-child')
rec_name.innerHTML = `${js[0].receivername}`
//dropoffaddress
const drop_add = document.querySelector('.dropoff-address p:last-child')
drop_add.innerHTML = `${js[0].dropoffaddress}`
//receiverphonenumber
const rec_phone = document.querySelector('.receiver-phone-number p:last-child')
rec_phone.innerHTML = `${js[0].receiverphonenumber}`

const itemDate = JSON.parse(sessionStorage.getItem('itemDate'))
const itemDateArray = Array.from(itemDate)

const itemType = document.querySelector('.item-type p:last-child')
itemType.innerHTML = `${itemDateArray[0].itemType}`

const pickupDate = document.querySelector('.pickup-date p:last-child')
pickupDate.innerHTML = `${itemDateArray[0].chooseDate}`

const x = document.querySelector('.md-sc-gh a')
x.addEventListener('click', function(e){
    e.preventDefault()
    if(window.location.href = 'register.html'){
        sessionStorage.removeItem('formDetails')
    }
})