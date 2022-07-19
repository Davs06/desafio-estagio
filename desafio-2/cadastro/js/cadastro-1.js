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

    //validação de campos vazios

    if (validNome && /*validEmail &&*/ validSenha && validConfimSenha) {

        let listData = JSON.parse(localStorage.getItem('listData') || '[]')

        listData.push({

            nome: nome.value,
            email: email.value,
            senha: senha.value
        })

        localStorage.setItem('listData', JSON.stringify(listData))


        window.location.href = '///home/davs/workspace/desafio-estagio/desafio-2/cadastro/infoCasal.html'

    } else {
        alert('preencha todos os campos corretamente')

        e.preventDefault()
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


email.addEventListener('keyup', () =>{

    if(!email.checkValidity()){

        email.setAttribute('style', 'border-color: red')

        validEmail = false
    }else {

        email.setAttribute('style', 'border-color: #ccc')
        validEmail = true
    }
})

//validações de senha preenchida corretamente 

senha.addEventListener('keyup', () => {

    if (senha.value.length < 8) {

        labelQuant.setAttribute('style', 'color: red')
        validSenha = false

    } else {

        labelQuant.setAttribute('style', 'color: black')
        validSenha = true
    }
})


senha.addEventListener('keyup', () => {

    if (senha.value.search(/[0-9]/) == -1) {

        labelNumb.setAttribute('style', 'color:red')
        validSenha = false
    } else {

        labelNumb.setAttribute('style', 'color: black')
        validSenha = true
    }
})

senha.addEventListener('keyup', () => {

    if (senha.value.search(/[a-z]/) == -1) {

        labelMinusc.setAttribute('style', 'color:red')
        validSenha = false
    } else {

        labelMinusc.setAttribute('style', 'color: black')
        validSenha = true
    }
})

senha.addEventListener('keyup', () => {

    if (senha.value.search(/[A-Z]/) == -1) {

        labelMaiusc.setAttribute('style', 'color:red')
        validSenha = false
    } else {

        labelMaiusc.setAttribute('style', 'color: black')
        validSenha = true
    }
})

senha.addEventListener('keyup', () => {

    if (senha.value.search(/[?\!\@\#\$\%\^\&\*]/) == -1) {

        labelEspecial.setAttribute('style', 'color:red')
        validSenha = false
    } else {

        labelEspecial.setAttribute('style', 'color: black')
        validSenha = true
    }
})

//validação da confirmação de senha 

confirmSenha.addEventListener('keyup', () => {

    if (senha.value === confirmSenha.value) {

        confirmSenha.setAttribute('style', 'border-color: #ccc')
        validConfimSenha = true

    } else {

        confirmSenha.setAttribute('style', 'border-color: red')
        validConfimSenha = false

    }
})
