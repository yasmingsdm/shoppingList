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
    console.log(prioridade)
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
        document.getElementById('lista-normal').innerHTML = itemNormal
    } else if (onde == 'mercado'){
        itemMercado.push(item)
        document.getElementById('lista-mercado').innerHTML = itemMercado
    }else{
        itemOutro.push(item)
        document.getElementById('lista-outro').innerHTML = itemOutro
    }


}

const item1 = () => {
    console.log ('yeah')
}