import axios from 'axios';

export default axios.create({
  baseURL: 'https://node-apis.herokuapp.com/'
});