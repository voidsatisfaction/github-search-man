import axios from 'axios';

const githubHost = 'https://api.github.com';

function baseApi(token=undefined) {
  return axios.create({
    baseURL: githubHost,
    headers: { 'Authorization': 'Bearer ' + token }
  });
}

export function searchRepos({ text }) {
  return axios({
    method: 'get',
    url: githubHost + '/search/repositories?q=' + text
  })
  .then((response) => (response));
}

export function getMyWatchingRepos({ token }) {
  var api = baseApi(token);

  return api.get('/user/subscriptions')
    .then((response) => (response));
}