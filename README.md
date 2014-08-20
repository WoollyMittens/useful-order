# useful.order.js: Ordering Lists

Order lists of results by arbitrary fields.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-order">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="./css/useful-order.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-order.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to start the script

```html
    <dl id="order-menu" data-target="#order-list li">
        <dt>Sort by:</dt>
        <dd><a href="#start" data-source=".start" class="order-by">Start</a></dd>
        <dd><a href="#finish" data-source=".finish">Finish</a></dd>
        <dd><a href="#region" data-source=".park">Region</a></dd>
        <dd><a href="#length" data-source=".park i" data-type="number">Length</a></dd>
    </dl>
```

**data-target : {string}** - The rule to target elements to be sorted.

**data-source : {string}** - The rule to target the element's content to sort by.

**data-type : {string}** - Indicated that the content is to be used as a number. (todo: date, currency, etc.)

```javascript
var order = new useful.Order( document.getElementById('id') );
```

**id : {string}** - The ID attribute of an element somewhere in the document.

## How to control the script

### orderBy

```javascript
order.orderBy(index);
```

Sorts a specific column.

**index : {integer}** - The index of button to sort.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses grunt.js from http://gruntjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `grunt import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `grunt dev` - Builds the project for development purposes.
+ `grunt prod` - Builds the project for deployment purposes.
+ `grunt watch` - Continuously recompiles updated files during development sessions.
+ `grunt serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## How to test the script

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
