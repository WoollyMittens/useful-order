# order.js: Ordering Lists

Order lists of results by arbitrary fields.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-order">demo</a>.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/order.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/order.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/order.js'
], function(Order) {
	...
});
```¯

Or import into an MVC framework.

```js
var Order = require('js/order.js');
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
var order = new Order(
    document.getElementById('id'),
    function (by) {}
);
```

**id : {string}** - The ID attribute of an element somewhere in the document.

**by : {string}** - How the content was sorted.

## How to control the script

### orderBy

```javascript
order.orderBy(index);
```

Sorts a specific column.

**index : {integer}** - The index of button to sort.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
