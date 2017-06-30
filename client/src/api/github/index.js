import axios from 'axios';

const githubHost = 'https://api.github.com';

export function searchRepos({ text }) {
  return axios({
    method: 'get',
    url: githubHost + '/search/repositories?q=' + text
  })
  .then((response) => (
    response
  ))
}