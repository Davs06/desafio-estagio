let nomeConjuge = document.querySelector('#nome')
let emailConjuge = document.querySelector('#email')



let btn = document.querySelector('#acao').addEventListener('click', () => {    

        let listData1 = JSON.parse(localStorage.getItem('listData1') || '[]')

        listData1.push({

            nomeConjuje: nome.value,
            emailConjuge: email.value,
            
        })

        localStorage.setItem('listData1', JSON.stringify(listData1))

        // alert('proxima pag')
        window.location.href = '///home/davs/workspace/desafio-estagio/desafio-2/cadastro/dateCasa.html'


})