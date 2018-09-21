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

  getToken() {
    return this.token;
  }

  getId() {
    return this.id;
  }

  setToken(token) {
    this.token = token;
  }

  setId(id) {
    this.id = id;
  }
}
