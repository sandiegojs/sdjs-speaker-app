import Cookie from "js-cookie";
import Router from "next/router";

const TOKEN_STORAGE_KEY = "token";

export class AuthToken {
  static async storeToken(token) {
      console.log(token);
    Cookie.set(TOKEN_STORAGE_KEY, token);
    await Router.push("/");
  }
}
