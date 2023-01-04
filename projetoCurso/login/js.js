var validar = document.querySelector('#login')

validar.addEventListener('click')

function validarLogin (){
    var nome = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (nome === 'lenilson' && senha === 'lucas123') {
        console.log('bem vindo', nome); 
        window.open('http://127.0.0.1:5500/home/home.html') 
    } else {
        console.error('login e senha invalido');
    }
}