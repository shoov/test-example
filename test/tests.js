'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

var testName = 'chrome';

describe('Search engine tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the Google main search page',function(done) {
    client
      .url('https://www.google.com/?gfe_rd=cr&ei=ku8bVbG3K-SG8QeFmICQDg&gws_rd=cr&fg=1')
      .webdrivercss(testName, {
        name: 'google'
      }, shoovWebdrivercss.processResults)
      .call(done);

  });

  it('should show the DuckDuckGo main search page',function(done) {
    client
      .url('https://duckduckgo.com/')
      .webdrivercss(testName, {
        name: 'duckduck'
      }, shoovWebdrivercss.processResults)
      .call(done);

  });
});
