import { ChatGPTAPI } from "chatgpt";
import { Record } from "pocketbase";
import signale from "signale";
import { IBotCredentials, IChatGPTKey } from "../types/pocketBaseEntity.js";
import { getConnectedClient } from "./requestClient.js";

const pocketBaseToBotCredentials = (record: Record) => {
  return record as unknown as IBotCredentials;
};
const pocketBaseTotGPTKeyRef = (record: Record) => {
  return record as unknown as IChatGPTKey;
};
const botCredentialsRef = () => {
  const client = getConnectedClient();
  return client.collection("bot_credentials");
};
const chatGPTKeyRef = () => {
  const client = getConnectedClient();
  return client.collection("chatGPTKey");
};

const getBotCredentials = async () => {
  const record = await (await botCredentialsRef().getFullList()).pop();
  signale.success("Got bot credentials");

  signale.success(JSON.stringify(record, null, 4));
  return pocketBaseToBotCredentials(record);
};

const setChatGPT = async () => {
  const record = await (await chatGPTKeyRef().getFullList()).pop();
  signale.success("Got chatGPT credentials");

  signale.success(JSON.stringify(record, null, 4));
  const keyObject = pocketBaseTotGPTKeyRef(record);

  global.chatGPTObject = new ChatGPTAPI({
    apiKey: keyObject.key
  });
};

export { getBotCredentials, setChatGPT };
