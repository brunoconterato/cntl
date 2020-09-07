import {create} from 'apisauce';

const instance = create({
  baseURL: 'http://localhost:3000',
  // headers: {
  //   'content-type': 'application/x-www-form-urlencoded',
  //   Accept: 'application/json',
  // },
});

export default instance;
