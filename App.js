var React = require('react');
var IntlMixin = require('react-intl');
var i18nLoader = require('./i18n');

var App = React.createClass({
  mixins: [IntlMixin],

  handleLocaleChange(e) {
    i18nLoader(e.target.value, this.setProps, this);
  },
  
  render() {
    return (
      <div>
        <p>{ this.getIntlMessage('hello') }</p>
        <p>
          {this.formatNumber(1000, {
              style   : 'currency',
              currency: 'USD'
          })}
        </p>
        <select onChange={this.handleLocaleChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    );
  }

});

module.exports = App;
