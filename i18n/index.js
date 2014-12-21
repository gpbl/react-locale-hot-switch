var hasIntl = typeof(Intl) !== "undefined";

function it(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/it.js', './it'], function (require) {
      require('intl/locale-data/jsonp/it.js');
      var i18n = require('./it');
      cb.call(scope, i18n);
    });
  else {
    require.ensure(['./it'], function (require) {
      var i18n = require('./it');
      cb.call(scope, i18n);
    });
  }
}

function es(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/es.js', './es'], function (require) {
      require('intl/locale-data/jsonp/es.js');
      var i18n = require('./es');
      cb.call(scope, i18n);
    });
  else {
    require.ensure(['./es'], function (require) {
      var i18n = require('./es');
      cb.call(scope, i18n);
    });
  }
}

function de(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/de.js', './de'], function (require) {
      require('intl/locale-data/jsonp/de.js');
      var i18n = require('./de');
      cb.call(scope, i18n);
    });
  else {
    require.ensure(['./de'], function (require) {
      var i18n = require('./de');
      cb.call(scope, i18n);
    });
  }
}

function en(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/en.js', './en'], function (require) {
      require('intl/locale-data/jsonp/en.js');
      var i18n = require('./en');
      cb.call(scope, i18n);
    });
  else {
    require.ensure(['./en'], function (require) {
      var i18n = require('./en');
      cb.call(scope, i18n);
    });
  }
}

var loaders = {
  en: en,
  de: de,
  it: it,
  es: es
}

module.exports = function(locale, cb, scope) {
  if(!hasIntl) 
    require.ensure(['intl/Intl'], function (require) {
      require('intl/Intl');
      loaders[locale](cb, scope);
    });
  else 
    loaders[locale](cb, scope);
};
