var React = require('react');
var LanguageSelector = require('./LanguageSelector');
var api = require('../utils/api');

class Popular extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    };

    this.selectLanugage = this.selectLanugage.bind(this);
  }

  componentDidMount () {
    this.selectLanugage(this.state.selectedLanguage);
  }

  selectLanugage(lang) {
    this.setState(function(){
      return {
        selectedLanguage: lang,
        repos: null
      };
    });

    api.fetchPopularRepos(lang)
      .then(function(repos) {
        this.setState(function() {
          return {
            repos: repos
          };
        });
      }.bind(this))
  }

  render() {
    return (
      <div>
        <LanguageSelector
          selectedLanguage = {this.state.selectedLanguage}
          selectLanguage = {this.selectLanugage}
        />

      {JSON.stringify(this.state.repos, null, 2)}
      </div>
    );
  }
}

module.exports = Popular;
