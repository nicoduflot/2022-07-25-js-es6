/* fonction de raccourcis pour la fin de chargement de la page */
export default function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

/* raccourci de querySelector */
function s(selector){
    return document.querySelector(selector);
}

function sAll(selector){
    return document.querySelectorAll(selector);
}

export {s, sAll};

/*
création - modification et suppression d'un cookie
*/

export function setCookie(name, value, days = -1){
    let dateNow = new Date();
    dateNow.setTime(dateNow.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${dateNow.toUTCString()}; SameSite=Strict; Secure`;
}

export function getCookie(name){
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

export function addSpan(cible){
    let span = document.createElement('span');
    let spanContent = document.createTextNode(`Span`);
    span.append(spanContent);
    span.addEventListener('click', function(){
        this.remove();
    });
    span.setAttribute('class', 'alert alert-success');
    span.style.setProperty('width','100px');
    span.style.setProperty('margin','10px');
    span.style.setProperty('cursor','pointer');
    cible.appendChild(span);
}