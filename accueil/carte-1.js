    var card = document.querySelectorAll('.card-content');
    var typo = document.querySelectorAll('.typo');
    var bouton = document.querySelectorAll('.btn-card');
    var iListn_1 = document.querySelectorAll('.i-1');
    var iListn_2 = document.querySelectorAll('.i-2');

    for (let i = 0; i < iListn_1.length; i++) {
        iListn_1[i].style.display = "none";
    }
    
    function change(e) {
        card[e].style.backgroundColor = '#363636';
        typo[e].style.color = '#FFF';
        iListn_2[e].style.marginLeft = '-8px';
        iListn_1.style[e].display = 'inline';
        cta[e].style.display = 'inline';
    }

    function reset(e) {
        card[e].style.backgroundColor = 'white';
        typo[e].style.color = 'black';
        bouton[e].style.width = 'max-content';
        iListn_2[e].style.marginLeft = '0';
        iListn_1[e].style.display = 'none';
        cta.style[e].display = 'none';
    }
    for (let i = 0; i < iListn_1.length; i++) {
        card.addEventListener('mouseover', change[i]);
        card.addEventListener('mouseout', reset[i]);
    }