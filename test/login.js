'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

var url = 'https://www.google.com/?gfe_rd=cr&ei=ku8bVbG3K-SG8QeFmICQDg&gws_rd=cr&fg=1';
var testName = 'chrome';

describe('Google tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done);
  });

  it('should show the general search page',function(done) {
    client
      .url(url)
      .webdrivercss(testName, {
        name: 'homepage'
      }, shoovWebdrivercss.processResults)
      .call(done);

  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });
});