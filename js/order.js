/*
	Source:
	van Creij, Maurice (2018). "order.js: Ordering HTML Lists", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Order = function (object, promise) {

	// PROPERTIES

	this.sorters = [];

	// METHODS

	this.init = function (object, promise) {
		// store the configuration
		this.object = object;
		this.promise = promise || function () {};
		// get the sorter elements
		this.sorters = this.object.getElementsByTagName('a');
		// add event listeners to all the sorters
		for (var a = 0, b = this.sorters.length; a < b; a += 1) {
			this.sorters[a].addEventListener('click', this.onSorterSelected(a));
		}
		// return the object
		return this;
	};

	this.orderBy = function (index) {
		// update the menu
		this.updateMenu(index);
		// update the list
		this.updateList(index);
	};

	this.updateMenu = function (index) {
		// reset all the sorters except the current index
		for (var a = 0, b = this.sorters.length; a < b; a += 1) {
			this.sorters[a].className = (a === index) ? 'order-by' : '';
		}
	};

	this.updateList = function (index) {
		var a, b,
			unsorted = [],
			sorted = [],
			source = this.sorters[index].getAttribute('data-source'),
			method = this.sorters[index].getAttribute('data-type'),
			sortees = document.querySelectorAll( this.object.getAttribute('data-target') ),
			parent = sortees[0].parentNode,
			fragment = document.createDocumentFragment();
		// get the sortee elements
		for (a = 0, b = sortees.length; a < b; a += 1) { unsorted.push(sortees[a]); }
		// sort the elements
		sorted = unsorted.sort(function (a, b) {
			// get the source value
			a = a.querySelector(source).innerHTML;
			b = b.querySelector(source).innerHTML;
			// process the source value
			if (method === 'number') {
				a = parseFloat(a);
				b = parseFloat(b);
			}
			// compare the values
			return (a < b) ? -1 : 1;
		});
		// clone the sorted elements into the document fragment
		for (a = 0, b = sorted.length; a < b; a += 1) { fragment.appendChild( parent.removeChild(sorted[a], true) ); }
		parent.appendChild(fragment);
		// trigger the promise
		this.promise(this.sorters[index].getAttribute('data-source'));
	};

	// EVENTS

	this.onSorterSelected = function (index) {
		var _this = this;
		return function (evt) {
			// cancel the click
			evt.preventDefault();
			// sort the sortees by the selected sorter
			_this.orderBy(index);
		};
	};

	this.init(object, promise);

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Order });
if (typeof module != 'undefined') module.exports = Order;
