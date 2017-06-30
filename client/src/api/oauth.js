import axios from 'axios';

import api from './base';

export function getToken({ code, platform }) {
  return api.post('/login', {
    platform,
    code
  })
  .then((res) => {
    console.log(res);
    return res;
  });
}