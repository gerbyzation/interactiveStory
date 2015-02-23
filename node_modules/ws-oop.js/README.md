#OOP.js

A set of methods that help with object orientated programming in javascript.

**Note**: All credit goes to the coffescript homepage from where the code originated (http://coffeescript.org/#classes).

##Installation

	npm install OOP.js

##Usage - extends.

Assuming your classes are laid out in the following way....

	
	```js

	var Dog;

	Dog = (function() {

		function Dog()
		{

		};

		return Dog;

	})();

	```

Import oop to use inheritance and pass the parent class variable to the wrapper function.

	```js

	var OOP = require('oop'),
		Animal = require('animal');

	var Dog;

	Dog = (function(_super) {

		OOP.__extends(Dog, _super);

		function Dog()
		{

		};

		return Dog;

	})(animal);

	```

##License

	See "LICENSE" file.