const calcular = document.getElementById('Calcular');

function calculaimc () {
    const nome = document.getElementById('Nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('Resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        // Funções aqui campos foram preenchidos
        alert ('Ideia completa')
    } else {
        alert ('Preencha todos os campos')
    }

}

calcular.addEventListener('click', calculaimc);
