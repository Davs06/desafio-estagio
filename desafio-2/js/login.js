
let btn = document.querySelector('#acao').addEventListener('click', (e) => {

    let emailLogin = document.querySelector('#email')
    let senhaLogin = document.querySelector('#senha')

    let listData = []

    //desmembrabdo dados do objeto no local storage 
    let valid = {

        email: '',
        senha: ''
    }

    //acessar dados local storage
    listData = JSON.parse(localStorage.getItem('listData'))

    //importando dados para validação
    listData.forEach((item) => {
        
        if (emailLogin.value === item.email && senhaLogin.value === item.senha) {
            valid = {
                email: item.email,
                senha: item.senha
            }
        }
    })
    
    //validando dados acessados no local storage 
    if (emailLogin.value === valid.email && senhaLogin.value === valid.senha){

        window.location.href = 'file:///home/davs/workspace/desafio-estagio/desafio-2/index.html'
    }else{

        alert("Email ou senha incorretos")
        email.focus()
        e.preventDefault()
    }




})