const form = document.getElementById('form')
form.onsubmit = colocarNaLista

let itemOob = []
let itemNormal = []
let itemMercado = []
let itemOutro = []

function colocarNaLista(){
    //Nao deixar refresh a página:
    event.preventDefault();

    //Informacoes do HTML:
    let item = document.getElementById('item').value

    let onde = ''

    if (document.getElementById('oob').checked == true){
        onde = 'oob'
    } else if (document.getElementById('mercado').checked == true){
        onde = 'mercado'
    } else if (document.getElementById('normal').checked == true){
        onde = 'normal'
    } else {
        onde = 'outro'
    }

    let prioridade = document.getElementById('prioridade').value

    //Prioridades:
    
    if (prioridade >5){
        item = item.toUpperCase()
    }
    if (prioridade == 10){
        item = item.bold()
    }

   

    //Escrever na coluna certa:
    if (onde=='oob'){
        itemOob.push(item)
        document.getElementById('lista-oob').innerHTML += '<li onClick="item1()">' + item + '</li>'
    } else if (onde == 'normal'){
        itemNormal.push(item)
        document.getElementById('lista-normal').innerHTML += '<li onClick="item2()">' + item + '</li>'
    } else if (onde == 'mercado'){
        itemMercado.push(item)
        document.getElementById('lista-mercado').innerHTML += '<li onClick="item3()">' + item + '</li>'
    }else{
        itemOutro.push(item)
        document.getElementById('lista-outro').innerHTML += '<li onClick="item4()">' + item + '</li>'
    }


}

//Riscar a lista:

const item1 = () => {
    document.getElementById('lista-oob').style.textDecoration = 'line-through'
}

const item2 = () => {
    document.getElementById('lista-normal').style.textDecoration = 'line-through'
}

const item3 = () => {
    document.getElementById('lista-mercado').style.textDecoration = 'line-through'
}

const item4 = () => {
    document.getElementById('lista-outro').style.textDecoration = 'line-through'
}

//Apagar lista:
const doneMercado = ()=>{
    document.getElementById('lista-mercado').remove()
}

const doneOob = ()=>{
    document.getElementById('lista-oob').remove()
}

const doneNormal = ()=>{
    document.getElementById('lista-normal').remove()
}

const doneOutro = ()=>{
    document.getElementById('lista-outro').remove()
}