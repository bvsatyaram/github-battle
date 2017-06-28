var React = require('react');
var LanguageSelector = require('./LanguageSelector');

class Popular extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.selectLanugage = this.selectLanugage.bind(this);
  }

  selectLanugage(lang) {
    this.setState(function(){
      return {
        selectedLanguage: lang
      };
    });
  }

  render() {
    return (
      <div>
        <LanguageSelector
          selectedLanguage = {this.state.selectedLanguage}
          selectLanguage = {this.selectLanugage}
        />
      </div>
    );
  }
}

module.exports = Popular;
