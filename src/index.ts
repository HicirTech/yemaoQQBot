import signale from "signale";
import { getChatBot } from "./bot/bot.js";
import { getBotCredentials } from "./pocketbase/BotCredential.js";
import {
  initPocketBaseConnectionViaGoogle,
  initPocketBaseViaPassword
} from "./pocketbase/requestClient.js";
import pWaitFor from 'p-wait-for';

const main = async () => {
  // await initPocketBaseConnectionViaGoogle();
  await initPocketBaseViaPassword();

  await pWaitFor(() => Boolean(global.isLoggedIn));


};

main();
