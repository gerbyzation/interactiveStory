var HttpRouter = require('edu/dat/Web/Router');

var router = new HttpRouter();

router.setPublicDir('public');

router.get('/', home);
router.get('/{location}', showLocation);
router.error('404', error);

function home (app, req, res) {
    // under construction
    var templates = app.get('templates');
    
    res.end();

}

function showLocation(app, req, res, args) {

    var templates = app.get('templates');
    var story = app.get('story');

    if (story.hasLocation(args.location)) {

        var loc = story.fetchLocation(args.location);

        if (typeof loc.datadescription_template !== undefined ) {
            templates.add( 'desc',  __dirname + "/templates/desc/" + loc.datadescription_template + ".html");

            var desc = templates.render('desc', {});
            loc.setDescription(desc);
        }

        var content = templates.render('content', loc);

        res.write(templates.render('template', {
            content: html
        }));

    } else {

        router.triggerErrorListener('404', req, res);
    }

    res.end();

}

function error(app, req, res) {

    var templates = app.get('templates');

    res.writeHead(404, {"content-type": "text/html"});
    console.log(templates);
    res.write(templates.render('notfound', {}));

    res.end();

}

module.exports = router;