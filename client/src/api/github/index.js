import URL from 'url-parse';
import axios from 'axios';

const githubHost = 'https://api.github.com';

function baseApi(token=undefined) {
  return axios.create({
    baseURL: githubHost,
    headers: token ? { 'Authorization': 'token ' + token } : undefined
  });
}

export function searchRepos({ text, token }) {
  const api = baseApi(token);

  return api.get(`/search/repositories?q=${text}`)
    .then((response) => (response));
}

export function getMyWatchingRepos({ token }) {
  const api = baseApi(token);

  return api.get('/user/subscriptions?per_page=100')
    .then((response) => (response));
}

export function followRepo({ token, subscriptionUrl }) {
  const api = baseApi(token);

  const url = new URL(subscriptionUrl);
  const pathname = url.pathname;

  return api.put(pathname, { "subscribed": "true" })
    .then((response) => (response));
}

export function unfollowRepo({ token, subscriptionUrl }) {
  const api = baseApi(token);

  const url = new URL(subscriptionUrl);
  const pathname = url.pathname;

  return api.delete(pathname)
    .then((response) => (response));
}

// curl 'https://api.github.com/user/repos?page=2&per_page=100'