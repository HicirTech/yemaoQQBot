import { DiscussMessageEvent, GroupMessageEvent, PrivateMessageEvent } from "oicq"
import { createGroupChatRecord } from "../../pocketbase/GroupChatRecord.js";
import { IGroupChatRecord } from "../../types/pocketBaseEntity.js"
import { YEMAO_CHAT_GROUP_ID } from "../botConstants.js";

const useGroupChatRecordProcessor = (msg: GroupMessageEvent) => {
    const { sender, group_id, raw_message } = msg;
    if ([YEMAO_CHAT_GROUP_ID].includes(group_id)) {
        const { user_id, card, nickname } = sender;
        const datetime = new Date(msg.time * 1000 + 31680000);
        const messageDate = datetime.toISOString();
        const isImage = msg.message[0].type === "image";


        const newGroupChatRecord = {
            senderQQ: user_id.toString(),
            senderName: `${msg.sender.card || msg.sender.nickname}`,
            time: messageDate,
            msg: isImage ? msg.message[0]['url'] : raw_message
        } as IGroupChatRecord;

        createGroupChatRecord(newGroupChatRecord);
    }

}

export {
    useGroupChatRecordProcessor
}