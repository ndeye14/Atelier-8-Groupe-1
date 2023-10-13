let card = document.querySelectorAll('.card-content');
let typo = document.querySelectorAll('.typo');
let bouton = document.querySelectorAll('.btn-card');
let iListn_1 = document.querySelectorAll('.i-1');
let iListn_2 = document.querySelectorAll('.i-2');
let cta = document.querySelectorAll('.cta');

for (let i = 0; i < card.length; i++) {
    iListn_1[i].style.display = "none";
    card[i].addEventListener('mouseover', function () {
        card[i].style.backgroundColor = '#363636';
        typo[i].style.color = '#FFF';
        iListn_2[i].style.marginLeft = '-8px';
        iListn_1.style[i].display = 'inline';
        cta[i].style.display = 'inline';
    });
    card[i].addEventListener('mouseout', function () {
        card[i].style.backgroundColor = 'white';
        typo[i].style.color = 'black';
        bouton[i].style.width = 'max-content';
        iListn_2[i].style.marginLeft = '0';
        iListn_1[i].style.display = 'none';
        cta.style[i].display = 'none';
    })
}