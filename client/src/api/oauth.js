import api from './base';

export function getToken({ code, platform }) {
  return api.post('/login', {
    platform,
    code
  })
  .then((res) => {
    return res;
  });
}