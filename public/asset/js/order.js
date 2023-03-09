const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const itemType = document.querySelector('.yd-col-3-item select').value
    const chooseDate = document.querySelector('.col-4-input-date input[type="date"]').value

    if(itemType === '' || chooseDate === ''){
        submitform.errorMessage()
    }
})

class serviceForm{
    errorMessage(){
        const errorNote = document.createElement('div')
        const marginAuto = document.querySelector('.df-gh-yd-col-1')

        errorNote.innerHTML = `<p> All Fields Are Mandatory </p>`
        form.insertBefore(errorNote,marginAuto)
    }
}
const submitform = new serviceForm()