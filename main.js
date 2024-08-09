var onda1 = document.getElementById('onda1')
var onda2 = document.getElementById('onda2')
var onda3 = document.getElementById('onda3')
var onda4 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + 'px';
    onda2.style.backgroundPositionX = 300 + rolagemPos * -4 + 'px';
    onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + 'px';
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + 'px';
})

    var colheitadeira = document.querySelector('.colheitadeira-image');
    window.addEventListener('scroll', function() {
        var rolagemPos = window.scrollY;
        colheitadeira.style.left = 50 + rolagemPos * 2 + 'px';
    });

// Responsividade: 
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});s

// Fechar o menu e a sobreposição quando a sobreposição for clicada
document.getElementById('overlay').addEventListener('click', function() {
    const menu = document.querySelector('nav ul');
    const overlay = document.getElementById('overlay');
    menu.classList.remove('active');
    overlay.classList.remove('active');
});




document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.querySelector('nav ul').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

