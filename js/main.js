function makeNav(color, navArray, bool) {
    var navBar = document.createElement('nav');
    navBar.style = "height: 150px; width: 100%; position: fixed; top: 0; left: 0;"
    navBar.style.backgroundColor = color;
    navBar.id = "nav1";
    var navUl = document.createElement('ul');
    navUl.style = "height: 100%; margin: 0; padding: 0;";
    navBar.appendChild(navUl);
    document.body.appendChild(navBar);

    for (var i = 0; i < navArray.length; i++) {
        var newLi = document.createElement('li');
        var newAnchor = document.createElement('a');
        newLi.style = "display: inline-block; padding:30px; text-align: center; width: " + (100 / navArray.length) + "%;";

        newAnchor.innerHTML = navArray[i].content;
        newAnchor.href = navArray[i].href;
        newAnchor.style.textDecoration = "none";

        if (bool == true) {
            //true indicates light
            newAnchor.style.color = "#FFF";
        } else {
            //false indicates dark
            newAnchor.style.color = "#222";
        }
        newLi.appendChild(newAnchor);
        navUl.appendChild(newLi);
    }
}


function makeLowerNav(color, navArray, bool) {
    var navBar = document.createElement('nav');
    navBar.style = "height: 50px; width: 100%; position: fixed; top: 150px; left: 0;"
    navBar.style.backgroundColor = color;

    var navUl = document.createElement('ul');
    navUl.style = "height: 100%; margin: 0; padding: 0;";
    navBar.appendChild(navUl);
    document.body.appendChild(navBar);

    for (var i = 0; i < navArray.length; i++) {
        var newLi = document.createElement('li');
        var newAnchor = document.createElement('a');
        newLi.style = "display: inline-block; padding-top: 12px; text-align: center; width: " + (100 / navArray.length) + "%;";

        newAnchor.innerHTML = navArray[i].content;
        newAnchor.href = navArray[i].href;
        newAnchor.style.textDecoration = "none";

        if (bool == true) {
            //true indicates light
            newAnchor.style.color = "#FFF";
        } else {
            //false indicates dark
            newAnchor.style.color = "#222";
        }
        newLi.appendChild(newAnchor);
        navUl.appendChild(newLi);
    }
}

makeNav('#E9E4D1', [{
        content: '<img src="../img/logo.jpg">',
        href: 'index.html'
}, {
        content: '<a>Contra Costa County Animal Response Team</a>',
        href: 'index.html'
}],
    false);


makeLowerNav('black', [
        {
            content: '<a>HOME</a>',
            href: 'index.html'
        },
        {
            content: '<a>GALLERY</a>',
            href: 'index.html'
        },
        {
            content: '<a>EVENTS</a>',
            href: 'index.html'
        },
        {
            content: '<a>GALLERY</a>',
            href: 'index.html'
        }],
    true);
