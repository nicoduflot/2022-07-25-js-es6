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

function jsonToTableObject(data){
    let thead = '<tr>';
    let tbody = '';
    let firstRound = true;
    // parcourir les éléments de 1er niveau dans le JSON
    data.forEach(enregistrement=>{
        // on parcour ainsi chaque enregistrement de 1er niveau
        // on prépare le tbody
        tbody += '<tr>';
        for(key in enregistrement){
            // on regarde les variable du 1er niveau, pour faire la différence entre les données et les object
            tbody += '<td>';
            if('object' !== typeof( enregistrement[key])){
                if(firstRound){
                    // si c'est le premier tour, on créer la colonne
                    thead += `<th>${key}</th>`;
                }
                // si c'est un donnée, ça va dans une case
                console.log(`${key}: `, enregistrement[key]);
                tbody += enregistrement[key];
            }else{
                // si la variable est un objet, on parcour ses attributs
                if(firstRound){
                    // si c'est le premier tour, on créer la colonne
                    thead += `<th>${key}</th>`;
                }
                console.log(`${key}: `);
                for(subKey in enregistrement[key]){
                    // comme la variables est un attribut, on va récupérer les données qui ne sont pas des objets
                    if('object' !== typeof(enregistrement[key][subKey])){
                        // on affiche les données
                        console.log(subKey, enregistrement[key][subKey]);
                        tbody += `${enregistrement[key][subKey]}<br />`;
                    }else{
                        // si c'est encore un objet, on le parcour pour récuppérer les dernières données
                        console.log(`${subKey}:`);
                        tbody += `<b>${subKey}:</b><br />`;
                        for(subSubKey in enregistrement[key][subKey]){
                            console.log(subSubKey, enregistrement[key][subKey][subSubKey]);
                            tbody += `${enregistrement[key][subKey][subSubKey]}<br />`;
                        }
                    }
                }
            }
            tbody += '</td>';
        }
        tbody += '</tr>';
        firstRound = false;
        console.log('-------------------------');
    });

    thead += '</tr>';
    return [thead, tbody];
}