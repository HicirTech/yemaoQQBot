import { IGroupChatRecord } from "../types/pocketBaseEntity.js";
import { getConnectedClient } from "./requestClient.js";
import signale from "signale";
import { Record } from "pocketbase";

const pocketBaseToGroupChatRecord = (record: Record) => {
    return record as unknown as IGroupChatRecord
}

const groupChatRecordRef = () => {
    const client = getConnectedClient();
    return client.collection("groupChatRecord");
};

const createGroupChatRecord = async (newGroupChatRecord: IGroupChatRecord, slient = true) => {
    const newRecord = await groupChatRecordRef().create(newGroupChatRecord);

    if (!slient) {
        signale.success(`New Group chat record created`);
    }
    signale.success(JSON.stringify(newRecord, null, 4));


    return pocketBaseToGroupChatRecord(newRecord);
};

export { createGroupChatRecord };
