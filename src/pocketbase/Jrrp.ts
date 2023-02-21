import { IJrrp } from "../types/pocketBaseEntity.js";
import { getConnectedClient } from "./requestClient.js";
import signale from "signale";
import { Record } from "pocketbase";

const pocketBaseToJrrp = (record: Record) => {
  return record as unknown as IJrrp
}

const jrrpRef = () => {
  const client = getConnectedClient();
  return client.collection("jrrp");
};

const createJrrp = async (newJrrp: IJrrp) => {
  const newRecord = await jrrpRef().create(newJrrp);
  signale.success(`New Jrrp record created`);
  signale.success(JSON.stringify(newRecord, null, 4));
  return newRecord;
};

const getTodayJrrpViaQQ = async (messageDate: string, senderQQ: string) => {
  const filterString = `(qq = ${senderQQ} && today = '${messageDate}')`;

  try {
    const record = await jrrpRef().getFirstListItem(filterString);

    signale.success(`Found Jrrp by query ${filterString}`);
    signale.success(JSON.stringify(record, null, 4));
    return pocketBaseToJrrp(record)
  } catch {
    signale.fatal(`No such Jrrp record by query ${filterString}, return null`);
    return null;
  }
};

export { createJrrp, getTodayJrrpViaQQ };
