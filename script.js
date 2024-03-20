const button = document.querySelector('.botao-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhalistaDeItens = []

function AddNovaTarefa() {
    minhalistaDeItens.push({

        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ''
    //"forEach percorre todos itens de uma array"
    minhalistaDeItens.forEach((item_lista, index) => {
        // novaLi pega o que já existe e adiciona o novo item
        // && funciona como and no javascript, ou seja, verifica se todos valores são ou podem ser convertidos para "true"
        novaLi = novaLi + `
    <li class="tasks ${item_lista.concluida && "done"}"">
        <img src="/img/checked.png" onclick=" concluirTarefa(${index})">
        <p>${item_lista.tarefa}</p>
        <img src="/img/trash.png" onclick="deletarItem(${index})">
    </li>   

    
    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify (minhalistaDeItens)) //Json.stringfy transforma um objeto em uma string

}

function concluirTarefa (index) {
minhalistaDeItens[index].concluida = !minhalistaDeItens[index].concluida // pega exatamente o valor que já está (por padrão vem false) e inverte (utilizando o "!")

mostrarTarefas()
}


function deletarItem(index) {
    minhalistaDeItens.splice(index, 1) // splice permite deletar um item dentro de um array; (posição dentro do array, quantos apartir da posição)
mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage) { // esse if verifica se a const tarefasDoLocalStorage tem algo dentro
    minhalistaDeItens = JSON.parse (tarefasDoLocalStorage) // JSON.parse tansforma uma string em objeto
    }
    mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', AddNovaTarefa)