var React = require('react');

class LanguageSelector extends React.Component {
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    
    return (
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            <li
              className={this.props.selectedLanguage === lang ? 'active' : ''}
              onClick={this.props.selectLanugage.bind(null, lang)}
              key={'li-' + lang}>
              {lang}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

module.exports = LanguageSelector;
