import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'tracket.eu.auth0.com',
    clientID: '16VzfYmzqI_DRgncqH2YpMqJXFcTB6hR',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://tracket.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
};