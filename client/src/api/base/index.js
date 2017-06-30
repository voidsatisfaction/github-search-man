import axios from 'axios';

import url from '../../env/url';

const base = axios.create({
  baseURL: url.host
});

export default base;