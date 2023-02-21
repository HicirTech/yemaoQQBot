import pWaitFor from "p-wait-for";
import { startChatBot } from "./bot/bot.js";
import {
  getBotCredentials,
  setChatGPT
} from "./pocketbase/BotCredential.js";
import {
  initPocketBaseConnectionViaGoogle
} from "./pocketbase/requestClient.js";

const main = async () => {
  await initPocketBaseConnectionViaGoogle();
  // await initPocketBaseViaPassword();

  await pWaitFor(() => Boolean(global.isLoggedIn));

  await setChatGPT();
  const botCredential = await getBotCredentials();

  startChatBot(botCredential.qqNo);
};

main();
