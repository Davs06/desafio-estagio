let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let confirmSenha = document.querySelector('#confirmSenha')

let validNome = true
let validEmail = true
let validSenha = true
let validConfimSenha = true


let labelQuant = document.querySelector('#labelQuant')
let labelMaiusc = document.querySelector('#labelMaiusc')
let labelMinusc = document.querySelector('#labelMinusc')
let labelNumb = document.querySelector('#labelNumb')
let labelEspecial = document.querySelector('#labelEspecial')



let btn = document.querySelector('#acao').addEventListener('click', (e) => {

    e.preventDefault()

    if (validNome && /*validEmail &&*/ validSenha && validConfimSenha) {

        let listData = JSON.parse(localStorage.getItem('listData') || '[]')

        listData.push({

            nome: nome.value,
            email: email.value,
            senha: senha.value
        })

        localStorage.setItem('listData', JSON.stringify(listData))

        // alert('proxima pag')
        window.location.href = '///home/davs/workspace/desafio-estagio/desafio-2/cadastro/infoCasal.html'

    } else {
        alert('preencha todos os campos corretamente')

    }


})



nome.addEventListener('keyup', () => {

    if (nome.value.length <= 3) {

        nome.setAttribute('style', 'border-color: red')
        validNome = false

    } else {

        nome.setAttribute('style', 'border-color: #ccc')
        validNome = true

    }
})

senha.addEventListener('keyup', () => {

    if (senha.value.length <= 7) {

        labelQuant.setAttribute('style', 'color: red')
        validSenha = false

    } else {

        labelQuant.setAttribute('style', 'color: black')
        validSenha = true
    }
})


// senha.addEventListener('keyup', () => {

//     if (senha.value != '?') {

//         labelEspecial.setAttribute('style', 'color:red')
//     } else {

//         labelEspecial.setAttribute('style', 'color: black')
//     }
// })

confirmSenha.addEventListener('keyup', () => {

    if (senha.value === confirmSenha.value) {

        confirmSenha.setAttribute('style', 'border-color: #ccc')
        validConfimSenha = true

    } else {

        confirmSenha.setAttribute('style', 'border-color: red')
        validConfimSenha = false

    }
})
