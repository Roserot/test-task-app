export class LocalStorage {
  public static saveUser = (user) => {
    window.localStorage.setItem('logedIn', JSON.stringify(user));
  }

  public static removeUser = () => {
    window.localStorage.removeItem('logedIn');
  }

  public static getUser = () => {
    const retrievedObject  = window.localStorage.getItem('logedIn');

    return !!retrievedObject
      ? JSON.parse(retrievedObject)
      : null;
  }
}