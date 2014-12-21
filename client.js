var React = require('react');
var i18nLoader = require('./i18n');

function renderApp(i18n) {
  var Hello = require('./components/Hello.js');
  React.render(<Hello {...i18n} />, document.body);
}

var defaultLocale = 'en';

i18nLoader(defaultLocale, renderApp);
