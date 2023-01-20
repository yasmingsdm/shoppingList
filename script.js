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

    if (document.getElementById('oob').checked === true){
        onde = 'oob'
    } else if (document.getElementById('mercado').checked === true){
        onde = 'mercado'
    } else if (document.getElementById('normal').checked === true){
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
    let itemId = Math.random()
    if (onde=='oob'){
        itemOob.push(item)
        document.getElementById('lista-oob').innerHTML += `<li onClick=item1(${itemId}) id='${itemId}'>${item}</li>`
    } else if (onde == 'normal'){
        itemNormal.push(item)
        document.getElementById('lista-normal').innerHTML += `<li onClick=item1(${itemId}) id='${itemId}'>${item}</li>`
    } else if (onde == 'mercado'){
        itemMercado.push(item)
        document.getElementById('lista-mercado').innerHTML += `<li onClick=item1(${itemId}) id='${itemId}'>${item}</li>`
    }else if (onde == 'outro'){
        itemOutro.push(item)
        document.getElementById('lista-outro').innerHTML += `<li onClick=item1(${itemId}) id='${itemId}'>${item}</li>`
    }

}

//Riscar a lista:

const item1 = (itemId) => {
    document.getElementById(itemId).style.textDecoration = 'line-through'
}

//Apagar lista:
const doneMercado = ()=>{
    itemMercado = []
    document.getElementById('lista-mercado').innerHTML = ' '
}

const doneOob = ()=>{
   itemOob = []
   document.getElementById('lista-oob').innerHTML = ' '
}

const doneNormal = ()=>{
    itemNormal = []
    document.getElementById('lista-normal').innerHTML = ' '
}

const doneOutro = ()=>{
    itemOutro = []
    document.getElementById('lista-outro').innerHTML = ' '
}

