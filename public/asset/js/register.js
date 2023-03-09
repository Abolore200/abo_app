const form = document.querySelector('.form-register')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const fullname = document.querySelector('#fullname').value
    const phonenumber = document.querySelector('#phonenumber').value
    const pickupaddress = document.querySelector('#pickupaddress').value
    const emailaddress = document.querySelector('#emailaddress').value
    const receivername = document.querySelector('#receivername').value
    const dropoffaddress = document.querySelector('#dropoffaddress').value
    const receiverphonenumber = document.querySelector('#receiverphonenumber').value

    if(fullname === '' || phonenumber === '' || pickupaddress === '' || emailaddress === '' || receivername === '' || dropoffaddress === '' || receiverphonenumber === ''){
        html.errorMessage()
    } else {
        html.saveForm(fullname,phonenumber,pickupaddress,emailaddress,receivername,dropoffaddress,receiverphonenumber)
        window.location.href = 'confirm.html'
    }

})
class Register{
    errorMessage(){
        const marginAuto = document.querySelector('form .msd-th-rs')
        const errorNote = document.createElement('div') 
        errorNote.classList.add('p-margin')       

        errorNote.innerHTML = `<p> All Fields Are Mandatory! </p>`
        form.insertBefore(errorNote,marginAuto)
        marginAuto.style.setProperty('margin-top', '10px')
        setTimeout(function(){
            errorNote.remove()
            marginAuto.style.removeProperty('margin-top')
        }, 3000)
    }
    saveForm(fullname,phonenumber,pickupaddress,emailaddress,receivername,dropoffaddress,receiverphonenumber){
        const formObject = {fullname,phonenumber,pickupaddress,emailaddress,receivername,dropoffaddress,receiverphonenumber}
        getToLs(formObject)
    }
}
const html = new Register()
function getToLs(formObject){
    let fillForm = addToLS()
    fillForm.push(formObject)
    sessionStorage.setItem('formDetails', JSON.stringify(fillForm))
}
function addToLS(){
    let fillForm;
    let fillFormLs = sessionStorage.getItem('formDetails')
    if(fillFormLs === null){
        fillForm = []
    } else {
        fillFormLs = JSON.parse(fillFormLs)
    } return fillForm
}