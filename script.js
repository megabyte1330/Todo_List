const button = document.querySelector('.botao-add-task')
const input = document.querySelector('.input-task')

let minhalistaDeItens = []

function AddNovaTarefa(){
minhalistaDeItens.push(input.value)

console.log(minhalistaDeItens)
}


button.addEventListener('click', AddNovaTarefa )