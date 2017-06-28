var React = require('react');

function LanguageSelector(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='languages'>
      {languages.map(function(lang) {
        return (
          <li
            className={props.selectedLanguage === lang ? 'active' : ''}
            onClick={props.selectLanugage.bind(null, lang)}
            key={'li-' + lang}>
            {lang}
          </li>
        );
      })}
    </ul>
  );
}

module.exports = LanguageSelector;
