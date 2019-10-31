import getter from '@app/api/getter'
import { getterActions } from '@configs/api'

export class ApiConnector {
  static login = async () => {
    const response = await getter(getterActions.GET_USER);
    const {data, statusText} = response;

    return {
      data,
      statusText
    }
  }
}