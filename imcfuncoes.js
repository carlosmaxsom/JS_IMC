const calcular = document.getElementById('Calcular');

function calculaimc () {
    const nome = document.getElementById('Nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('Resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
<<<<<<< HEAD
        const valorIMC = (peso / (altura ** 2)).toFixed(1);
        
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso.';
        }else if (valorIMC <= 25){
            classificacao = 'com peso ideal. Muito bem!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I';
        }else if (valorIMC < 40){
            classificacao = 'com obsesidade grau II';
        }else {
            classificacao = 'com obsidade grau III. Tome cuidado!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}.`

=======
        const valorIMC = (peso / (altura ** 2)).toFixed(2);

        let classificao = '';

        if (valorIMC < 18.5) {
            
        }

        resultado.textContent = valorIMC;
    
>>>>>>> 1182c6c6682ff6856b99c5de98d6fda6d7a50778
    } else {
        resultado.textContent = 'Preencha todos os campos, para o cálculo ser realizado'
    }

}

calcular.addEventListener('click', calculaimc);
