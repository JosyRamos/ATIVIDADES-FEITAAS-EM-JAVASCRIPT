let cadastro = []
const novo = document.querySelector('input#novo')
    const list = document.querySelector('input#list')
    const ence= document.querySelector('input#ence')
    const resul = document.querySelector('div#resul')
    cadastro.push({
        novo:novo,
        list:list,
        ence:ence,
        resul:resul
    })

function Novo(){
       if (cadastro == novo){
           let nome = prompt(`Digite seu  Nome:`)
           let Idade = Number(prompt('Digite sua Idade:'))
           let sexo = prompt('Digite seu sexo masculi ou feminio?:') 
       }
    }

        function List(){
        if (cadastro == list){
            for(let i=0; i<cadastro.length; i++) {
            resul.innerHTML =+`<tr><td> ${cadastro.nome[i]} </td><td> ${cadastro.Idade[i]} ${cadastro.sexo[i]} `}
            }
        }
        function Encerrar(){
        if (cadastro == ence){
            resul.innerHTML=+`Cadastro encerrado`
        }
    }

