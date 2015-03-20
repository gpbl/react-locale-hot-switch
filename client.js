var React = require('react');
var i18nLoader = require('./i18n');

function renderApp(i18n) {
  var App = require('./App.js');
  React.render(<App {...i18n} />, document.body);
}

var defaultLocale = document.documentElement.getAttribute('lang');

i18nLoader(defaultLocale, renderApp);
