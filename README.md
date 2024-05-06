# order.js: Ordering Lists

*DEPRICATION WARNING: the functionality in this script has been superceeded / trivialised by updated web standards.*

Order lists of results by arbitrary fields.

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

Or use imported as a component in existing projects.

```js
@import {Order} from "js/order.js";
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

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens).
