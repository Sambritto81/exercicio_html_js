const form = document.getElementById('tabela-valor');

form,addEventListener('submit' , function(e) {
    e.preventDefault(); 

const numberA = document.getElementById("campo-A");

const numberB = document.getElementById('campo-B');

if (parseInt(numberB.value) > parseInt(numberA.value)) {
    alert('Formulário Válido!');

    }  else {
        alert('Formulário Inválido! o valor do campo B deve ser maior que o campo A.');
    
    }

    numberA.value = '';
    numberB.value = '';

});
console.log(form)