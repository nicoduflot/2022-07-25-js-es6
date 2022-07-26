loaded(function(){
    
    console.log('page chargée');
    let titreDeChapitre = s('.titreDeChapitre');
    /*
    titreDeChapitre.addEventListener('mouseover', function(){
        console.log(titreDeChapitre.innerHTML);
    });
    */
    let allP = sAll('p:not(#special)'); // enlever celui avec l'id special
    console.log(allP);
    
    allP.forEach(function(paragraph){
        console.log(paragraph);
        paragraph.addEventListener('mouseover', function(){
           s('#showP').innerText = this.innerHTML;
           this.classList.add('alert', 'alert-success', 'test');
        });

        paragraph.addEventListener('mouseout', function(){
            s('#showP').innerText = '';
            this.classList.remove('alert', 'alert-success', 'test');
         });
    });
    

    let nav = s('nav');
    console.log(nav);
    console.log(nav.baseURI);
    console.log(nav.childNodes);
    
    nav.childNodes.forEach(function(noeudEnfant){
        console.log(noeudEnfant);
    });

    s('div#showP').addEventListener('click', function(event){
        console.log(event);
    });

    /*
    cliquer sur le bouton testez moi et afficher un message en console
    */

    let testezMoi = s('button.testez-moi');
    testezMoi.addEventListener('click', function(){
        console.log('On a cliquer sur le bouton');
    });

    /* changer l'attribut src de l'image 
    au mouseover par ../images/pip-boy-thumb-up.png 
    au mouseout par ../images/pip-boy-thumb-down.png 
    
    */

    let imgOver = s('#imgOver');

    imgOver.addEventListener('mouseover', function(){
        this.setAttribute('src', '../images/pip-boy-thumb-up.png');
        this.setAttribute('style', 'border:1px solid #0f0');
        console.log(this.getAttribute('src')); // affiche la vlaeur actuelle de l'attribut src
        console.log(this.hasAttribute('src')); // répond true si l'élément src est présent, false si non
    });

    imgOver.addEventListener('mouseout', function(){
        this.setAttribute('src', '../images/pip-boy-thumb-down.png');
        this.removeAttribute('style');
    });



}); 