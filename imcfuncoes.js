const calcular = document.getElementById('Calcular');

function calculaimc () {
    const nome = document.getElementById('Nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('Resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso / (altura ** 2)).toFixed(2);

        let classificao = '';

        if (valorIMC < 18.5) {
            
        }

        resultado.textContent = valorIMC;
    
    } else {
        resultado.textContent = 'Preencha todos os campos, para o cálculo ser realizado'
    }

}

calcular.addEventListener('click', calculaimc);
