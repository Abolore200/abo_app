const btn = document.querySelectorAll('.yd-col-1-service .btn')
const arrayBtn = Array.from(btn)
arrayBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault()
    })
})

const ok = document.querySelector('.nd-fdn-gt input[type="button"]')
ok.style.marginLeft = '20px'
ok.addEventListener('click', function(){
    const cal = document.querySelector('.nd-fdn-gt input[type="date"]').value
    console.log(cal);
})
