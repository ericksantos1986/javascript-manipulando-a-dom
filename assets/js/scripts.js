const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer');
const body = document.getElementsByTagName('body');
const button = document.getElementById('mode-selector');
const darkModeClass = 'dark-mode';
function alterarModo(){
    alterarClasses();
    alterarTextos();
}

function alterarClasses(){
    h1.classList.toggle('dark-mode');
    button.classList.toggle('dark-mode');
    footer[0].classList.toggle('dark-mode');
    body[0].classList.toggle('dark-mode');
}

function alterarTextos(){
    const darkMode ='Dark Mode'
    const ligthMode = 'Ligth Mode'
    if(body[0].classList.contains(darkModeClass)){
        button.innerHTML = ligthMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode
    h1.innerHTML = ligthMode + " ON";
}

button.addEventListener('click', alterarModo);
