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
           s('#showP').innerHTML = this.innerHTML;
        });
    } );
    

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

}); 