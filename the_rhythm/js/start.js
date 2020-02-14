$(document).ready(() => {
    $('.header_burger').click(() => {
        $('.header_burger, .header_menu').toggleClass('active');
        $('.content').toggleClass('blur');
    });
    if(!window.location.hash){
        window.location.hash = '#main';
    } else loadData(window.location.hash);

    $(window).click(e => {
        if(e.target === $('.content')[0]) {
            $('.header_burger, .header_menu').removeClass('active');
            $('.content').removeClass('blur');
        }
    });
});

//download content according to the hash
$(window).on('hashchange',() => {
    const URLHash = window.location.hash;
    loadData(URLHash);
    $('.header_burger, .header_menu').removeClass('active');
    $('.content').removeClass('blur');
});

function loadData(URLHash) {
    let url = 'pages/';
    switch(URLHash) {
        case "#game":
            url += "game.html";
            break;
        case "#about":
            url += "about.html";
            break;
        case "#main":
            url += "main.html";
            break;
        default:
            url += 'highscores.html'
    }
    $.ajax(url,
        {
            type:'GET',
            dataType:'html',
            success: dataLoaded,
            error: errorHandler
        }
    );
}

function dataLoaded(data) {
    $('.content').html(data);
    if(window.location.hash === '#game') {
        console.log('load game');
        loadGame();
    }
}

function errorHandler(e) {
    console.log("Error" + e);
}

function loadGame() {
    let scriptList = ['game.js', 'model.js', 'view.js', 'controller.js'];
    scriptList.forEach(script => {
        $('body').append(`<script src="js/${script}"></script>`);
    });
}

