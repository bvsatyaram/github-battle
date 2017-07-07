var React = require('react');
var LanguageSelector = require('./LanguageSelector');
var RepoGrid = require('./RepoGrid');
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

      {!!this.state.repos
        ? <RepoGrid
          repos = {this.state.repos}
        />
      : <div className='loading'><img src={require('../loading.gif')} alt="Loader"/></div>
      }

      </div>
    );
  }
}

module.exports = Popular;
