const btn = document.querySelectorAll('.yd-col-1-service .btn')
const arrayBtn = Array.from(btn)
arrayBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault()
    })
})