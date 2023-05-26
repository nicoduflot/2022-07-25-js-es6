/* fonction de raccourcis pour la fin de chargement de la page */
export default function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

/**
 * récupère un élément du DOM 
 * ou 
 * une collection d'élément du DOM
 * dépend du selecteur
 * @param {string} selector - selector for the html element(s)
 */
function q(selector){
    let collection = document.querySelectorAll(selector);
    return (collection.length > 1)? collection : collection[0];
}

export {q};

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

/**
 * crée un élément dans le DOM et ses attributs, classes et / ou style
 * des classes ou des styles doivent être définies dans des tableaux dans l'objet options.
 * 
 * les clefs de l'objet options sont utilisées pour représenter l'attribut, 
 * donc pour des attribut comme les dataset on écrira 'data-test': 'valeur'
 * 
 * Insérrer une classe
 *      class: ['classe1', 'classe2', ... ]
 * 
 * Insérrer du style
 *      style: ['property: value;', 'property: value;', ...]
 * 
 * il faut ABSOLUMENT ajouter le ; à la fin d'une propriété CSS pour les classes.
 * 
 * Ajouter l'élément créé au parent
 *  Il faut le selector du parent ciblé
 * 
 * @param {string} element  - tagname of the html element
 * @param {object} options  - option for the html element attributes
 * @param {string} parent   - the parent DOM Object /!\ NOT THE SELECTOR /!\
 */
export function cEO(element, options = {}, parent = null){
    let newElement = document.createElement(element);
    for(let key in options){
        if(typeof options[key] === 'object'){
            let attr = options[key].join(' ');
            newElement.setAttribute(key, attr);
        }else{
            newElement.setAttribute(key, options[key]);
        }      
    }
    if(null !== parent){
        parent.appendChild(newElement);
        /* adjacent mdn */
    }
    return newElement;
}

/**
 * crée un noeud de text
 * @param {string} content - text content of the text node
 * @param {object} parent - the parent DOM Object /!\ NOT THE SELECTOR /!\
*/
export function cTN(content, parent = null){
    let textNode = document.createTextNode(content);
    if(null !== parent){
        parent.append(textNode);
    }
    return textNode;
}

/**
 * supprime tous les neouds enfants
 * @param {object} node - le noeud dans lequel on supprime tous les enfants
 */
export function erase_childs(node){
    if(node.childNodes){
        let childs = node.childNodes;
        while(childs.length > 0){
            node.removeChild(node.lastChild);
        }
    }
}