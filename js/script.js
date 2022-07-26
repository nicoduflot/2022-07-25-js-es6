/* fonction de raccourcis pour la fin de chargement de la page */
function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

/* raccourci de querySelector */
function s(selector){
    return document.querySelector(selector);
}

function sAll(selector){
    return document.querySelectorAll(selector);
}

/*
création - modification et suppression d'un cookie
*/

function setCookie(name, value, days = -1){
    let dateNow = new Date();
    dateNow.setTime(dateNow.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${dateNow.toUTCString()}; SameSite=Strict; Secure`;
}

function getCookie(name){
    let tabCookie = document.cookie.split('; ');
    console.log(tabCookie);
    for(cookie of tabCookie){
        let tabValue = cookie.split('=');
        console.log(tabValue);
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}