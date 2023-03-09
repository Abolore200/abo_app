const form = document.querySelector('.submitForm')
form.addEventListener('submit', function(){
    const itemType = document.querySelector('.yd-col-3-item select').value
    const chooseDate = document.querySelector('.col-4-input-date input[type="date"]').value

    if(itemType === '' || chooseDate === ''){
        submitform.errorMessage()
    } else {
        submitform.confirmOrder(itemType,chooseDate)
    }
})

class serviceForm{
    errorMessage(){
        const marginAuto = document.querySelector('form .submit-btn')
        const errorNote = document.createElement('div') 
        errorNote.classList.add('p-margin')       

        errorNote.innerHTML = `<p> All Fields Are Mandatory! </p>`
        form.insertBefore(errorNote,marginAuto)
        setTimeout(function(){
            errorNote.remove()
        }, 3000)
    }
    confirmOrder(itemType,chooseDate){
        const arrayObject = [itemType,chooseDate]
        getToLs(arrayObject)
    }
}
const submitform = new serviceForm()
//
function getToLs(arrayObject){
    let dateItem = addToLS()
    dateItem.push(arrayObject)
    sessionStorage.setItem('itemDate', JSON.stringify(dateItem))
}
function addToLS(){
    let dateItem;
    let dateItemLs = sessionStorage.getItem('itemDate')
    if(dateItemLs === null){
        dateItem = []
    } else {
        dateItemLs = JSON.parse(dateItemLs)
    } return dateItem
}