const form = document.getElementById('form-agenda');
let linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero');
    if(numeros.includes(inputNumero)){
        alert('O número ' + inputNumero.value +' já foi cadastrado');
    }
    else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumero.value));

        let linha = '<tr>';
        linha += '<td><img id="contato" src="./images/contato.png" alt="simbolo de contatos">'+inputNomeContato.value + '</td>';
        linha += '<td><img id="telefone" src="./images/agenda-telefonica.png" alt="telefone">'+inputNumero.value + '</td>';
        linha += '</tr>';
        linhas += linha;
    };

    inputNomeContato.value = '';
    inputNumero.value = '';
    
}

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}