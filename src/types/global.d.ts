import PocketBase, { AuthProviderInfo } from "pocketbase";
import { OAuthParameters } from "./pocketBaseEntity.js";

declare global {
  var pocketbaseClient: PocketBase;
  var pocketbaseGoogleAuthProvider: AuthProviderInfo;
  var oAuthParameters: OAuthParameters;
  var isLoggedIn: boolean;
}

export { };
