'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This is an example assuming BrowserStack is used, as the capabilities are
// encoded in the way their system is using.
// See https://www.browserstack.com/automate/node

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
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

var providerPrefix = process.env.PROVIDER_PREFIX || '';
var testName = providerPrefix + '-' + selectedCaps || providerPrefix + '-' + 'default';

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
