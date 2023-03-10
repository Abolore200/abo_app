const orderNote = document.querySelector('.dj-ru-sn-ds-order p')
//generate random words
//code_one
const ran = Math.random().toString(36).slice(2)
const code_one = ran.substring(0,ran.length -7)
//code_two
const ran_two = Math.random().toString(36).slice(2)
const code_two = ran_two.substring(0,ran.length -7)
//code_three
const ran_three = Math.random().toString(36).slice(2)
const code_three = ran_three.substring(0,ran.length -7)
//code_four
const ran_four = Math.random().toString(36).slice(2)
const code_four = ran_four.substring(0,ran.length -7)

orderNote.innerHTML = `
    Your order have been confirmed. Your tracking code is <br>
    <span>${code_one}</span>-
    <span>${code_two}</span>-
    <span>${code_three}</span>-
    <span>${code_four}</span>
    `;