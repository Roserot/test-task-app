import { baseURL} from '@configs/api'

export default (action:string):Promise<any> => {
  const url = `${baseURL}${action}`;
  const options = {
    method: 'GET'
  }
  return fetch(url, options)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error)
    });
};