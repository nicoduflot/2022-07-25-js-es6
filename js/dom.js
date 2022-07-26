loaded(function(){
    
    console.log('page chargée');
    let titreDeChapitre = s('.titreDeChapitre');
    /*
    titreDeChapitre.addEventListener('mouseover', function(){
        console.log(titreDeChapitre.innerHTML);
    });
    */
    let allP = sAll('p');
    console.log(allP);
    /*
    allP.forEach(function(paragraph){
        console.log(paragraph);
        paragraph.addEventListener('mouseover', function(){
            console.log(paragraph.innerHTML);
        });
    } );
    */

    let nav = s('nav');
    console.log(nav);
    console.log(nav.baseURI);
    console.log(nav.childNodes);
    
    nav.childNodes.forEach(function(noeudEnfant){
        console.log(noeudEnfant);
    });

}); 