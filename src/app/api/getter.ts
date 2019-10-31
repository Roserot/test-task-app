import axios from 'axios';
import { baseURL, getterActions} from '@configs/api'

const getter = axios.create({
  baseURL
});

export default (action:string):Promise<any> => {
  return getter.get(action)
    .catch(err => console.error(`Can't resolve action ${action}`,err));
};