window.addEventListener('DOMContentLoaded', function(){
    //console.log('page chargée');
    //let sessionUser = document.getElementById('sessionUser');
    let sessionUser = document.querySelector('#sessionUser');
    let btnSession = document.querySelector('#btnSession');
    let btnClearSessionItem = document.querySelector('#btnClearSessionItem');
    let btnClearSession = document.querySelector('#btnClearSession');
    let dataSession = document.querySelector('#dataSession');
    //console.log(sessionUser);
    //console.log(sessionUser.getAttribute('class'));

    if(sessionStorage.getItem('sessionUserName')){
        dataSession.innerHTML = `<b>${sessionStorage.getItem('sessionUserName')}</b>`;
    }else{
        dataSession.innerHTML = `<b>Pas d'élément sessionUserName dans la session</b>`;
    }

    btnSession.addEventListener('click', function(){
        if(sessionUser.value !== ''){
            sessionStorage.setItem('sessionUserName', sessionUser.value);
            dataSession.innerHTML = `<b>${sessionStorage.getItem('sessionUserName')}</b>`;
            sessionUser.value = '';
        }
    });

});