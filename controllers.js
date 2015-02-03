var HttpRouter = require('edu/dat/Web/Router');

var router = new HttpRouter();

router.setPublicDir('public');

router.get('/', home);
router.get('/{location}', showLocation);
router.error('404', error);

function home (app, req, res) {

    var templates = app.get('templates');
    response.write(templates.render('home', {}));

    response.end();

}

function showLocation(app, req, res, args) {
    var templates = app.get('templates');
    var story = app.get('story');

    if (story.hasLocation(args.location)) {
        var loc = story.fetchLocation(args.location);

        if (true) {
            console.log("bla");
        }

    } else {
        router.triggerErrorListener('404', req, res);
    }

    response.end();
}

function error() {
    var templates = app.get('templates');

    response.writeHead(404, {"content-type": "text/html"});
    response.write(templates.render('notfound', {}));

    response.end();
}

module.exports = router;