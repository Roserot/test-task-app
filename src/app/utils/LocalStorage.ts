export class LocalStorage {
  public static saveLogIn = (user) => {
    window.localStorage.setItem('logedIn', JSON.stringify(user));
  }

  public static getUser = () => {
    const retrievedObject  = window.localStorage.getItem('logedIn');

    return !!retrievedObject
      ? JSON.parse(retrievedObject)
      : null;
  }
}