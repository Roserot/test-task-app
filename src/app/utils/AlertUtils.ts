import ModalAlert from '@lib/modal-alert'

export class AlertUtils {
  static notValidLogin = () => {
    new ModalAlert({
      type: 'warning',
      message: 'Invalid input fields'
    })
  }
}