window.addEventListener('DOMContentLoaded', function () {
    //console.log('page chargée');
    //let sessionUser = document.getElementById('sessionUser');
    let sessionUser = document.querySelector('#sessionUser');
    let btnSession = document.querySelector('#btnSession');
    let btnClearSessionItem = document.querySelector('#btnClearSessionItem');
    let btnClearSession = document.querySelector('#btnClearSession');
    let dataSession = document.querySelector('#dataSession');
    //console.log(sessionUser);
    //console.log(sessionUser.getAttribute('class'));

    if (sessionStorage.getItem('sessionUserName')) {
        dataSession.innerHTML = `<b>${sessionStorage.getItem('sessionUserName')}</b>`;
    } else {
        dataSession.innerHTML = `<b>Pas d'élément sessionUserName dans la session</b>`;
    }

    btnSession.addEventListener('click', function () {
        if (sessionUser.value !== '') {
            sessionStorage.setItem('sessionUserName', sessionUser.value);
            dataSession.innerHTML = `<b>${sessionStorage.getItem('sessionUserName')}</b>`;
            sessionUser.value = '';
        }
    });

    btnClearSessionItem.addEventListener('click', function () {
        sessionStorage.removeItem('sessionUserName');
        dataSession.innerHTML = `<b>Pas d'élément sessionUserName dans la session</b>`;
    });

    btnClearSession.addEventListener('click', function () {
        sessionStorage.clear();
        dataSession.innerHTML = `<b>Pas d'élément sessionUserName dans la session</b>`;
    });

    let localUser = document.querySelector('#localUser');
    let btnLocal = document.querySelector('#btnLocal');
    let btnClearLocalItem = document.querySelector('#btnClearLocalItem');
    let btnClearLocal = document.querySelector('#btnClearLocal');
    let dataLocal = document.querySelector('#dataLocal');

    if (localStorage.getItem('localUserName')) {
        dataLocal.innerHTML = `<b>${localStorage.getItem('localUserName')}</b>`;
    } else {
        dataLocal.innerHTML = `<b>Pas d'élément localUserName dans la session</b>`;
    }

    btnLocal.addEventListener('click', function () {
        if (localUser.value !== '') {
            localStorage.setItem('localUserName', localUser.value);
            dataLocal.innerHTML = `<b>${localStorage.getItem('localUserName')}</b>`;
            localUser.value = '';
        }
    });

    btnClearLocalItem.addEventListener('click', function () {
        localStorage.removeItem('localUserName');
        dataLocal.innerHTML = `<b>Pas d'élément localUserName dans la session</b>`;
    });

    btnClearLocal.addEventListener('click', function () {
        localStorage.clear();
        dataLocal.innerHTML = `<b>Pas d'élément localUserName dans la session</b>`;
    });

    /*
    let cookieValue = 'Nico';
    // création d'une date expiration

    let dateNow = new Date();
    console.log(dateNow);
    console.log(dateNow.toUTCString());

    console.log(dateNow.getFullYear());
    console.log(dateNow.getTime());
    console.log(dateNow.getTime() + (1 * 24 * 60 * 60 * 1000));

    // 1 * 24 * 60 * 60 * 1000
    dateNow.setTime(dateNow.getTime() + (1 * 24 * 60 * 60 * 1000));
    console.log(dateNow);
    // détruire prématurément un cookie, il faut lui donner une date d'expiration dépassée
    let anteDateNow = new Date();
    anteDateNow.setTime(anteDateNow.getTime() + (-1 * 24 * 60 * 60 * 1000));
    console.log(anteDateNow);

    // créer un cookie qui expire à dateNow
    //document.cookie = `monCookie=${cookieValue}; expires=${dateNow.toUTCString()}; SameSite=Strict; Secure`;
    //document.cookie = `monCookie=${cookieValue}; expires=${anteDateNow.toUTCString()}; SameSite=Strict; Secure`;*/
    

    let cookieValue = document.querySelector('#cookieValue');
    let btnCookie = document.querySelector('#btnCookie');
    let btnEmptyCookieValue = document.querySelector('#btnEmptyCookieValue');
    let btnClearCookieValue = document.querySelector('#btnClearCookieValue');
    let dataCookieValue = document.querySelector('#dataCookieValue');

    //console.log(getCookie('monCookie'));

    if (getCookie('monCookie')) {
        dataCookieValue.innerHTML = `<b>${getCookie('monCookie')}</b>`;
    } else {
        dataCookieValue.innerHTML = `<b>Pas d'élément monCookie dans la session</b>`;
    }

    btnCookie.addEventListener('click', function () {
        if (cookieValue.value !== '') {
            setCookie('monCookie', cookieValue.value, 1);
            dataCookieValue.innerHTML = `<b>${getCookie('monCookie')}</b>`;
            cookieValue.value = '';
        }
    });

    btnEmptyCookieValue.addEventListener('click', function () {
        setCookie('monCookie', '', 1);
        dataCookieValue.innerHTML = `<b>monCookie est vide : '${getCookie('monCookie')}'</b>`;
    });

    btnClearCookieValue.addEventListener('click', function () {
        setCookie('monCookie');
        dataCookieValue.innerHTML = `<b>monCookie est détruit'</b>`;
    });

    console.log(document.cookie);


});