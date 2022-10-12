var app = new Framework7({
    el: '#app',

    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/about/',
            url: '/pages/about.html',
        },
        {
            path: '(.*)',
            url: './pages/404.html',
        },
    ]
});

var mainView = app.views.create('.view-main');