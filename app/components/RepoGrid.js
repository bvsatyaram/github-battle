var React = require('react');
var PropTypes = require('prop-types');

function RepoGrid(props) {
  return (
    <div className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <div key={repo.name} className="popular-item">
            <div className='popular-rank'>#{index + 1}</div>
            <img src={repo.owner.avatar_url} alt="{repo.owner.login}" className='popular-avatar'/>
            <a href={repo.html_url} className='popular-link'>{repo.name}</a>
            <div className='popular-owner'>@{repo.owner.login}</div>
            <div className='popular-stars'>{repo.stargazers_count} stars</div>
          </div>
        );
      })}
    </div>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

module.exports = RepoGrid;
