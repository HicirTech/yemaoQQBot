import { Record } from "pocketbase";
import signale from "signale";
import { IBotCredentials } from "../types/pocketBaseEntity.js";
import { getConnectedClient } from "./requestClient.js";

const pocketBaseToBotCredentials = (record: Record) => {
  return record as unknown as IBotCredentials
}

const botCredentialsRef = () => {
  const client = getConnectedClient();
  return client.collection("bot_credentials");
};


const getBotCredentials = async () => {
  const record = await (await botCredentialsRef().getFullList()).pop();
  signale.success("Got bot credentials")

  signale.success(JSON.stringify(record, null, 4))
  return pocketBaseToBotCredentials(record);
};

export { getBotCredentials };

