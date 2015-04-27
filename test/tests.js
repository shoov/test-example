'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This is an example assuming BrowserStack is used, as the capabilites is
// encoded in the way their platform is using.
// See https://www.browserstack.com/automate/node
var capsConfig = {
  'chrome': {
    'browser' : 'Chrome',
    'browser_version' : '39.0',
    'os' : 'OS X',
    'os_version' : 'Yosemite',
    'resolution' : '1024x768'
  },
  'ie11': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  }
}

var selectedCaps = process.env.SELECTED_CAPS;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;
var testName = selectedCaps || 'default';

describe('Search engine tests', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, caps);
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
