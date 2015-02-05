 var Web = require('edu/dat/Web'),
	// Story = require('edu/dat/Story'),
    Story = require('./custom.js');

/**
 * Set up out story object.
 */
var story = new Story();
story.buildFromJsonFile( __dirname + "/adventure.json");

/**
 * Lets get a read on where our html is....
 */
var templates = new Web.Templates();

templates.add('template',   __dirname + '/templates/template.html');
templates.add('content',    __dirname + '/templates/content.html');
templates.add('notfound',   __dirname + '/templates/notfound.html');
templates.add('intro',   __dirname + '/templates/intro.html');

/**
 * Create our application, give it the references that we have set up
 * and run it.
 */
var app = new Web.Application();

app.setPort(8080);

app.set('templates', templates);
app.set('story', story);

app.setRouter(require( __dirname + '/controllers.js'));

app.run();
console.log(story.locations.memories);