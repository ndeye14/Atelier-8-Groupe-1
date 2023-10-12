    var card = document.querySelectorAll('.card-content');
    var typo = document.querySelectorAll('.typo');
    var bouton = document.querySelectorAll('.btn-card');
    var iListn_1 = document.querySelectorAll('.i-1');
    var iListn_2 = document.querySelectorAll('.i-2');

    for (let i = 0; i < iListn_1.length; i++) {
        iListn_1[i].style.display = "none";
    }
    
    function change(e) {
        card.style.backgroundColor = '#363636';
        typo.style.color = '#FFF';
        iListn_2.style.marginLeft = '-8px';
        iListn_1.style.display = 'inline';
        cta.style.display = 'inline';
    }

    function reset() {
        card.style.backgroundColor = 'white';
        typo.style.color = 'black';
        bouton.style.width = 'max-content';
        iListn_2.style.marginLeft = '0';
        iListn_1.style.display = 'none';
        cta.style.display = 'none';
    }

    card.addEventListener('mouseover', change);
    card.addEventListener('mouseout', reset);