var React = require('react');
var PropTypes = require('prop-types');

function LanguageSelector(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='languages'>
      {languages.map(function(lang) {
        return (
          <li
            className={props.selectedLanguage === lang ? 'active' : ''}
            onClick={props.selectLanguage.bind(null, lang)}
            key={'li-' + lang}>
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

LanguageSelector.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  selectLanguage: PropTypes.func.isRequired
}

module.exports = LanguageSelector;
