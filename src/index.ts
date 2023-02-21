import signale from "signale";
import { startChatBot } from "./bot/bot.js";
import {
  getBotCredentials,
  setChatGPT,
} from "./pocketbase/BotCredential.js";
import {
  initPocketBaseConnectionViaGoogle,
  initPocketBaseViaPassword,
} from "./pocketbase/requestClient.js";
import pWaitFor from "p-wait-for";

const main = async () => {
  await initPocketBaseConnectionViaGoogle();
  // await initPocketBaseViaPassword();

  await pWaitFor(() => Boolean(global.isLoggedIn));

  await setChatGPT();
  const botCredential = await getBotCredentials();

  startChatBot(botCredential.qqNo);
};

main();
