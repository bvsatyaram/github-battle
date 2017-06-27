var React = require('react');

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
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            <li
              className={this.state.selectedLanguage === lang ? 'active' : ''}
              onClick={this.selectLanugage.bind(null, lang)}
              key={'li-' + lang}>
              {lang}
            </li>
          );
        }, this)}
      </ul>
    );
  }
}

module.exports = Popular;
