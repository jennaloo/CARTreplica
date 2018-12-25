function makeNav(color, navArray, bool) {
    var navBar = document.createElement('nav');
    navBar.style = "height: 150px; width: 100%; position: absolute; top: 0; left: 0;"
    navBar.style.backgroundColor = color;
    navBar.id = "nav1";
    var navUl = document.createElement('ul');
    navUl.style = "height: 100%;";
    navBar.appendChild(navUl);
    document.body.appendChild(navBar);

    for (var i = 0; i < navArray.length; i++) {
        var newLi = document.createElement('li');
        var newAnchor = document.createElement('a');
        newLi.style = "display: inline-block; padding:0px; vertical-align:middle; ;text-align: center; width: " + (100 / navArray.length) + "%;";
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
    navBar.style = "height: 80px; width: 100%; position: absolute; top: 150px; left: 0;"
    navBar.style.backgroundColor = color;
    navBar.id = "nav2";
    navBar.class = "shift";
    var navUl = document.createElement('ul');
    navUl.style = "height: 100%; margin: 0; padding: 0;";
    navBar.appendChild(navUl);
    document.body.appendChild(navBar);

    for (var i = 0; i < navArray.length; i++) {
        var newLi = document.createElement('li');
        var newAnchor = document.createElement('a');
        newLi.style = "display: inline-block; padding-top: 25px ;text-align: center; width: " + (100 / navArray.length) + "%;";

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
        content: '<img src="img/logo.png">',
        href: 'index.html'
}, {
        content: '<a>Contra Costa <br> Animal Response Team</a>',
        href: 'index.html'
}],
    false);


makeLowerNav('BLACK', [
        {
            content: '<a>HOME</a>',
            href: 'index.html'
        },
        {
            content: '<a>GALLERY</a>',
            href: 'gallery.html'
        }, {
            content: '<a>RESOURCES</a>',
            href: 'resources.html'
        },
        {
            content: '<a>EVENTS</a>',
            href: 'events.html'
        },
        {
            content: '<a>CONTACT</a>',
            href: 'contact.html'
        }],
    true);



//
//$(document).ready(function () {
//    $('#nav2 li').hover(function () {
//        $(this).toggleClass('animated rubberBand');
//    });
//});
