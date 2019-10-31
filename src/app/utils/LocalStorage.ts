import store from 'store';

export class LocalStorage {
  public static saveLogIn = (user) => {
    store.set('logedIn', user);
  }

  public static getUser = () =>
    store.get('logedIn');
}