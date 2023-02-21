import { getBotCredentials } from "./pocketbase/BotCredential.js";
import {
  initPocketBaseViaPassword
} from "./pocketbase/requestClient.js";

const main = async () => {
  // await initPocketBaseConnectionViaGoogle();
  await initPocketBaseViaPassword();
  await getBotCredentials()
};

main();
