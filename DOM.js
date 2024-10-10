const btnSobreNos = document.getElementById('btn-sobre-nos');
const btnCafeteria = document.getElementById('btn-cafeteria');
const btnContato = document.getElementById('btn-contato');
const sobreNosBanner = document.getElementById('sobre-nos-banner');
const cafeteriaDiv = document.getElementById('carrossel-div');
const contatoDiv = document.getElementById('contato');
const btnVenhaConhecer = document.getElementById('btn-venha-conhecer');
const btnFaleConosco = document.getElementById('btn-fale-conosco');
const previous = document.getElementById('arrow-left');
const next = document.getElementById('arrow-right');
const btnEnviarMensagem = document.getElementById('btn-enviar-mensagem');
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const home = document.getElementById('banner');

btnSobreNos.addEventListener('click', () => {
    sobreNosBanner.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

btnCafeteria.addEventListener('click', () => {
    cafeteriaDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

btnContato.addEventListener('click', () => {
    contatoDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

btnVenhaConhecer.addEventListener('click', () => {
    cafeteriaDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

btnFaleConosco.addEventListener('click', () => {
    contatoDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});

function scrollHome() {
    menu.style.display = 'none';
    menuOpen = false;
    btnMenu.src = "src/Menu-mob.png";
    btnMenu.style.width = "auto";
    btnMenu.style.height = "auto";
    home.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollSobre() {
    menu.style.display = 'none';
    menuOpen = false;
    btnMenu.src = "src/Menu-mob.png";
    btnMenu.style.width = "auto";
    btnMenu.style.height = "auto";
    sobreNosBanner.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollCafeteria() {
    menu.style.display = 'none';
    menuOpen = false;
    btnMenu.src = "src/Menu-mob.png";
    btnMenu.style.width = "auto";
    btnMenu.style.height = "auto";
    cafeteriaDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function scrollContato() {
    menu.style.display = 'none';
    menuOpen = false;
    btnMenu.src = "src/Menu-mob.png";
    btnMenu.style.width = "auto";
    btnMenu.style.height = "auto";
    contatoDiv.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function enviarMensagem() {
    console.log("Hello World!")
}

/*Botão menu*/
let menuOpen = false;

btnMenu.addEventListener('click', () => {
    if(menuOpen) {
        menu.style.display = 'none';
        menuOpen = false;
        btnMenu.src = "src/Menu-mob.png";
        btnMenu.style.width = "auto";
        btnMenu.style.height = "auto";
    } else {
        menu.style.display = 'flex';
        menuOpen = true;
        btnMenu.src = "src/x-icon.png";
        btnMenu.style.width = "26px";
        btnMenu.style.height = "22px";
    }
});

/*carrossel*/
let shown = [1, -1, -1];
let last = 0;
let n = 0;
let widgets = document.getElementsByClassName("widget");

previous.addEventListener('click', () => {
    if(shown[0] === 0) {
        ;
    } else {
        widgets[shown[0]+n-1].style.display = "none";
        let aux = shown[0] - 1;
        shown[n-1] = -1
        for(let i = 2; i > 0 ; i--) {
            shown[i] = shown[i-1];
        }
        shown[0] = aux;
        widgets[shown[0]].style.display = "flex";
    }

    console.log(shown);
});

next.addEventListener('click', () => {
    if(shown[0] === 6-n) {
        ;
    } else {
        widgets[shown[0]].style.display = "none";
        for(let i = 0; i < 3; i++) {
            if(shown[i] != -1) {
                shown[i]++;
            }
        }
        widgets[shown[0]+n-1].style.display = "flex";
    }
});

function uptadeWidgets() {
    if(window.innerWidth <= 964) {
        n = 1;
    } else if(window.innerWidth >= 965 && window.innerWidth <= 1280) {
        n = 2;
    } else {
        n = 3;
    }

    if(n - last === 2 || n - last === -2) {
        startWidgets();
    } else if(n > last) {
        for(let i = 2; i >= 0 ; i--) {
            if(shown[i] != -1) {
                if(shown[i] === 5) {
                    for(let i = 2; i > 0 ; i--) {
                        shown[i] = shown[i-1];
                    }
                    shown[0] = shown[1]-1;
                    widgets[shown[0]].style.display = "flex";
                } else {
                    shown[i+1] = shown[i]+1;
                    widgets[shown[i+1]].style.display = "flex";
                } break;
            }
        }
    } else if(n < last) {
        for(let i = 0; i <= 3; i++) {
            if(shown[i] === -1) {
                widgets[shown[i-1]].style.display = "none";
                shown[i-1] = -1;
                break;
            } else if(i === 3) {
                widgets[shown[2]].style.display = "none";
                shown[2] = -1;
            }
        }
    }
    last = n;
}

function startWidgets() {
    for(let i = 0; i < 6 ; i++) {
        widgets[i].style.display = "none";
    }

    if(window.innerWidth <= 964) {
        n = 1;
        last = 1;
        shown = [0, -1, -1];
        widgets[0].style.display = "flex";
    } else if(window.innerWidth >= 965 && window.innerWidth <= 1280) {
        n = 2;
        last = 2;
        shown = [0, 1, -1];
        widgets[0].style.display = "flex";
        widgets[1].style.display = "flex";
    } else {
        n = 3;
        last = 3;
        shown = [0, 1, 2];
        widgets[0].style.display = "flex";
        widgets[1].style.display = "flex";
        widgets[2].style.display = "flex";
    }
}

window.onload = startWidgets;
window.onresize = uptadeWidgets;