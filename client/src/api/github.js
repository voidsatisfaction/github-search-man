import axios from 'axios';

const host = 'https://api.github.com';

export function searchRepos({ text }) {
  return axios({
    method: 'get',
    url: host + '/search/repositories?q=' + text
  })
  .then((response) => (
    response
  ))
}