import ModalAlert from '@lib/modal-alert'

export class AlertUtils {
  static warning = (message:string) => {
    new ModalAlert({
      type: 'warning',
      message
    })
  }

  static error = (message:string) => {
    new ModalAlert({
      type: 'error',
      message
    })
  }

}