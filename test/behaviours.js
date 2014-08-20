var webdriverjs = require('webdriverjs'),
    assert      = require('assert');

describe('Expected behaviours of "useful-order"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should re-order the list of results by length', function(done) {
        client
            .url('http://local.woollymittens.nl/useful-order/index.html')
            .getText('#order-list li:first-child .train', function(err, text) {
                assert(err === null);
                assert(text === 'Adamstown');
            })
            .click('#order-menu a[href="#length"]', function (err) {
                assert(err === null);
            })
            .getText('#order-list li:first-child .park i', function(err, text) {
                assert(err === null);
                assert(text === '7h / 17km');
            })
            .call(done);
    });

    it('should accept external "orderBy()" command', function(done){
        client
            .url('http://local.woollymittens.nl/useful-order/index.html')
            .execute('order.orderBy(2);', function (err) {
                assert(err === null);
            })
            .getText('#order-list li:first-child .park', function(err, text) {
                assert(err === null);
                assert( /Awabakal/.test(text) );
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
