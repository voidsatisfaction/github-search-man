import axios from 'axios';

import api from './base';

export function getToken({ platform }) {
  return api.get('/login')
    .then((res) => {
      console.log(res);
      return res;
    });
}