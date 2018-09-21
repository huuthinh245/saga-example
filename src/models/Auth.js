export default class Auth {
  static savedInstance = null;

  token = undefined;

  id = undefined;

  /**
   * @returns {Auth}
   */
  static getInstance() {
    if (Auth.savedInstance == null) {
      Auth.savedInstance = new Auth();
    }
    return this.savedInstance;
  }

  static getToken() {
    return this.token;
  }

  static getId() {
    return this.id;
  }

  static setToken(token) {
    this.token = token;
  }

  static setId(id) {
    this.id = id;
  }
}
