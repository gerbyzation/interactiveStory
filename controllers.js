var HttpRouter = require('edu/dat/Web/Router');

var router = new HttpRouter();

router.setPublicDir('public');

router.get('/', start);
router.get('/{catagory}/{location}', showLocation);
router.error('404', error);

function start (app, req, res) {
    
    var templates = app.get('templates');
    var content = templates.render('intro', {});
    res.write(templates.render('template', {
        content: content
    }));
    res.end();

}

function showLocation(app, req, res, args) {

    var templates = app.get('templates');
    var story = app.get('story');

    if (story.hasLocation(args.catagory, args.location)) {

        var loc = story.fetchLocation(args.catagory, args.location);

        if (loc.data.description_template) {

            templates.add( 'desc',  __dirname + "/templates/desc/" + loc.data.description_template + ".html");
            
            var desc = templates.render('desc', {});
            loc.setDescription(desc);
        }

        // if no exits specified select 2 random memories as exits
        if (loc.exits === undefined) {
        
            var memories = Object.keys(story.locations.memories.data).length;
            
            var random1 = Math.floor(Math.random() * memories);
            var random2;

            do {
                random2 = Math.floor(Math.random() * memories);
            } while ( random2 == random1 );

            var dir1 = story.locations.memories.data[Object.keys(story.locations.memories.data)[random1]];
            var dir2 = story.locations.memories.data[Object.keys(story.locations.memories.data)[random2]];

            loc.exits = [
                {
                    "destination": '/memories/' + dir1.key,// display the key
                    "text": dir1.name
                }, {
                    "destination": '/memories/' + dir2.key,
                    "text": dir2.name
                }
            ];
        }

        var content = templates.render('content', loc);
        console.log(content);
        res.write(templates.render('template', {
            content: content
        }));

    } else {

        router.triggerErrorListener('404', req, res);

    }

    res.end();

}

function error(app, req, res, args) {

    var templates = app.get('templates');

    res.writeHead(404, {"content-type": "text/html"});
    res.write(templates.render('notfound', {}));
    console.log(args);

    res.end();

}

module.exports = router;