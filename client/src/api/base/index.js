import axios from 'axios';

import url from '../../env/config';

const base = axios.create({
  baseURL: url.host
});

export default base;