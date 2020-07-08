import Cookie from "js-cookie";
import Router from "next/router";
import jwtDecode from "jwt-decode";

const TOKEN_STORAGE_KEY = "token";

export class AuthToken {

  decodedToken

  constructor(token) {
    // we are going to default to an expired decodedToken
    this.decodedToken = { email: "", exp: 0 };

    // then try and decode the jwt using jwt-decode
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {
      console.log(e);
    }
  }

  get authorizationString() {
    return `Bearer ${this.token}`;
  }

  get expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }

  static async storeToken(token) {
    Cookie.set(TOKEN_STORAGE_KEY, token);
    await Router.push("/admin/meetups");
  }
}
