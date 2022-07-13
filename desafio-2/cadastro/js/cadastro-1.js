class Validator {

    constructor() {
        this.validations = [

        ]
    }

    //iniciando validação
    validate(form){

        // pegar inputs
        let inputs = form.getElementsByTagName('input')
        console.log(inputs);

        let inputsArray = [...inputs]
        console.log(inputsArray);

        inputsArray.forEach(function(input){
            console.log(input);
        })

    }
}


let form = document.getElementById("form")
let submit = document.getElementById("acao")

let validator = new Validator()


// let nome = document.querySelector('#nome')
// let email = document.querySelector('#email')
// let senha = document.querySelector('#senha')
// let confirmSenha = document.querySelector('#confirmSenha')
// let labelQuant = document.querySelector('#labelQuant')
// let labelMaiusc = document.querySelector('#labelMaiusc')
// let labelMinusc = document.querySelector('#labelMinusc')
// let labelNumb = document.querySelector('#labelNumb')
// let labelEspecial = document.querySelector('#labelEspecial')

//evento para disparar validações 
submit.addEventListener('click', function(e) {

    e.preventDefault()
     
    validator.validate(form)

})

// nome.addEventListener('keyup',() => {

//      if(nome.value.length <= 2){

//         nome.setAttribute('style', 'border-color: red')

//      }else{

//         nome.setAttribute('style', 'border-color: #ccc')


//      }
// })

// senha.addEventListener('keyup',()=>{

//     if(senha.value.length <= 7){

//        labelQuant.setAttribute('style', 'color: red')

//     }else{

//         labelQuant.setAttribute('style', 'color: black')


//     }
// })
// senha.addEventListener('keyup',()=>{

//     if(senha.value.length <= 7){

//        labelQuant.setAttribute('style', 'color: red')

//     }else{

//         labelQuant.setAttribute('style', 'color: black')


//     }
// })
// senha.addEventListener('keyup',()=>{

//     if(senha.value.length <= 7){

//        labelQuant.setAttribute('style', 'color: red')

//     }else{

//         labelQuant.setAttribute('style', 'color: black')


//     }
// })
// senha.addEventListener('keyup',()=>{

//     if(senha.value.length <= 7){

//        labelQuant.setAttribute('style', 'color: red')

//     }else{

//         labelQuant.setAttribute('style', 'color: black')


//     }
// })
// senha.addEventListener('keyup',()=>{

//     if(senha.value.length <= 7){

//        labelQuant.setAttribute('style', 'color: red')

//     }else{

//         labelQuant.setAttribute('style', 'color: black')


//     }
// })

// confirmSenha.addEventListener('keyup',()=>{

//     if(confirmSenha.value == senha){

//        confirmSenha.setAttribute('style', 'border-color: red')

//     }else{

//         confirmSenha.setAttribute('style', 'color: black')


//     }
// })



// function cadastrar(){
    
// }