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

function getXhr(){
    let xhr = null;
    // vérifier si le navigateur support un des protocoles AJAX existant
    if( window.ActiveXObject || window.XMLHttpRequest ){
        // est-ce un des deux protocole microsoft ou celui des autres navigateur
        if(window.ActiveXObject){
            // si M$
            // deux protocoles
            try{
                xhr = new ActiveXObject('Msxml2.XMLHTTP');
            }catch(e){
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        }else{
            xhr = new XMLHttpRequest();
        }
    }else{
        console.log('votre navigateur ne supporte pas le protocole AJAX');
        xhr = false;
    }

    return xhr;
}

function jsonUsersToHTMLTable(data){
    let html = '';
    if(null !== data){
        data.forEach(user => {
            html += `
<tr data-id="${user.id}" data-username="${user.name}" data-email="${user.email}">
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
</tr>
            `;
        });
    }
    return html;
}