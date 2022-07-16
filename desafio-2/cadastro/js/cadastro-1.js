// let form = document.getElementById("form")
// let submit = document.getElementById("acao")



// function checkInputs() {
    
//     let nomeValue = nome.value.trim()
//     let emailValue = email.value.trim()
//     let senhaValue = senha.value.trim()
//     let confirmValue = confirmSenha.value.trim()
    
//     if (nomeValue === '') {

//         erroValidation(nome, 'preencha esse campo')

//     } else {



//     }
// }

// function erroValidation(input, message) {

//     let formControl = input.parentElement

//     form.control.className = 'form erro'
// }


// let form = document.querySelector('submit', (e) => {

//     e.preventDefault()

//     for (i = 0; i < this.element.length; i++) {
//         let item = this.element[i]

//         if (item.type !== "submit") {
//             if (item.value == "") {

//                 item.classList.add("error")
//             }
//         }
//     }
// })


let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let confirmSenha = document.querySelector('#confirmSenha')
let labelQuant = document.querySelector('#labelQuant')
let labelMaiusc = document.querySelector('#labelMaiusc')
let labelMinusc = document.querySelector('#labelMinusc')
let labelNumb = document.querySelector('#labelNumb')
let labelEspecial = document.querySelector('#labelEspecial')



let btn = document.querySelector('#acao').addEventListener('click', () => {

     alert('botao clicado ')

} )



nome.addEventListener('keyup', () => {



    if (nome.value.length <= 3) {

        nome.setAttribute('style', 'border-color: red')

    } else {

        nome.setAttribute('style', 'border-color: #ccc')


    }
})

senha.addEventListener('keyup', () => {


    if (senha.value.length <= 7) {

        labelQuant.setAttribute('style', 'color: red')

    } else {

        labelQuant.setAttribute('style', 'color: black')

    }
})

confirmSenha.addEventListener('keyup', () => {



    if (senha.value === confirmSenha.value) {

        confirmSenha.setAttribute('style', 'border-color: grenn')

    } else {

        confirmSenha.setAttribute('style', 'border-color: red')


    }
})
