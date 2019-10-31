import getter from '@app/api/getter'
import { getterActions } from '@configs/api'

export class ApiConnector {
  static login = async () => {
    try {
      const data = await getter(getterActions.GET_USER);
      return {
        data,
        status: true
      }
    } catch (e) {
      console.error(e);
      return {
        data: [],
        statusText: false
      }
    }
  }
}