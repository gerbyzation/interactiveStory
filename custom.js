var OOP = require('ws-oop.js'),
    FileSystem = require("fs"),
    Story = require('./node_modules/edu/dat/Story/Story.js'),
    StoryLocation = require('./node_modules/edu/dat/Story/StoryLocation.js'),
    Actor = require('./node_modules/edu/dat/Story/Actor.js');


// var Story;
// /*
//  * Overwriting some methods to allow for location catagories in adventure.js
//  */
// Story = (function(_super) {

//     OOP.__extends(Story, _super);

//     // function Story() {

//     //     // Story.__super__.constructor.apply(this, arguments);

//     // }

    Story.prototype.addLocation = function(catagory, name, obj) {

        this.locations[catagory][name] = obj;

    };

    Story.prototype.removeLocation = function (catagory, name) {

        delete this.locations[catagory][name];
        return this;

    };

    Story.prototype.hasLocation = function (catagory, name) {

        return (undefined !== this.locations[catagory][name]);

    };

    Story.prototype.fetchLocation = function (catagory, name) {

        return this.locations[catagory][name];

    };

    Story.prototype.fetchLocations = function (catagory, names) {

        var list = [];

        for (var i = 0; i < names.length; i++) {
            list[i] = this.fetchLocation(catagory, names[i]);
        }

        return list;

    };

    Story.prototype.buildFromJsonFile = function(filepath) {

        var text = FileSystem.readFileSync(filepath, "utf8");
        var json = JSON.parse(text);

        for (var catagory in json.locations) {

            this.locations[catagory] = {};

            for (var key in json.locations[catagory]) {

                var loc = new this.locationClass(),
                    obj = json.locations[catagory][key];
                
                loc.loadData(obj, key);

                this.addLocation(catagory, key, loc);
            
            }

        }

        for (var key in json.actors) {

            var actor = new this.actorClass(),
                obj = json.actors[key];

            actor.loadData(obj, key);

            this.addActor(key, actor);

        }

        return this;

    }; 

//     return Story;

// })(oStory);

// module.exports = Story;