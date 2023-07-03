let password_sistem = `IPDDF.1234`
let password = document.getElementById('passtxt')
let obj_cancelar = document.getElementById('cancelar')
let obj_entrar = document.getElementById('entrar')

obj_cancelar.addEventListener('click', () => {
    password.value = ``
    password.style.borderColor = `black`
    password.style.borderWidth = `1px`
})

obj_entrar.addEventListener('click', () => {

    if(password.value.length == 0 || password.value != password_sistem) {
        password.style.borderColor = `red`
        password.style.borderWidth = `2px`
    } else if(password.value == password_sistem) {
        location.href = "login/home.html"
    }

})