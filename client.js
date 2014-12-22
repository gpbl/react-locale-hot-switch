var React = require('react');
var i18nLoader = require('./i18n');
var App = require('./App.js');

function renderApp(i18n) {
  React.render(<App {...i18n} />, document.body);
}

var defaultLocale = document.documentElement.getAttribute('lang');

i18nLoader(defaultLocale, renderApp);
