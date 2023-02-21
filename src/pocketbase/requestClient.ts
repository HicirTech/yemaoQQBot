import PocketBase from "pocketbase";
import signale from "signale";
import { initExpressServer } from "../oauthHandler/oauthHandler.js";

const POCKET_BASE_LOCATION = "https://connection.yemaoren.net";
const OAUTH_REDIRECT_URL = "http://localhost:3000/";


const initPocketBaseViaPassword = async () => {
  const { uname, upass } = process.env;

  signale.fatal(`Init pocketbase via username ${uname} and password ${upass}`);
  const client = new PocketBase(POCKET_BASE_LOCATION);
  await client.admins.authWithPassword(uname, upass);
  global.pocketbaseClient = client;
  global.isLoggedIn = true;

};

const initPocketBaseConnectionViaGoogle = async () => {
  initExpressServer();

  const client = new PocketBase(POCKET_BASE_LOCATION);
  const authMethods = await client.collection("users").listAuthMethods();
  const googleAuthProvider = authMethods.authProviders.find(
    (provider) => provider.name === "google"
  );

  const loginUrl = `${googleAuthProvider.authUrl}${OAUTH_REDIRECT_URL}`;

  signale.success("Generate login link");
  signale.success(loginUrl);
  global.pocketbaseGoogleAuthProvider = googleAuthProvider;
  global.pocketbaseClient = client;
};

const handleGoogleLoginCallback = async () => {
  const client = getConnectedClient();
  const provider = global.pocketbaseGoogleAuthProvider;
  const params = global.oAuthParameters;

  await client
    .collection("users")
    .authWithOAuth2(
      provider.name,
      params.code,
      provider.codeVerifier,
      OAUTH_REDIRECT_URL,
      {
        emailVisibility: false,
      }
    );

  signale.success(`Application init competed!`);
  global.isLoggedIn = true;
};

const getConnectedClient = () => {
  if (global.pocketbaseClient) {
    return global.pocketbaseClient;
  }

  console.error("Global client is not created");
};

export {
  initPocketBaseConnectionViaGoogle,
  getConnectedClient,
  initPocketBaseViaPassword,
  handleGoogleLoginCallback,
};
