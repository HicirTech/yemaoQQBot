import { Client, GroupMessageEvent } from "oicq";
import { BOT_MESSAGE_EVENT_ID } from "./botConstants.js";
import { useGroupChatGPTProcessor } from "./messageProcessors/botChatGPT.js";
import { useGroupChatRecordProcessor } from "./messageProcessors/botGroupChatRecord.js";
import { useGroupChatJrrpProcessor } from "./messageProcessors/botJrrp.js";
import { useGroupReplyRecordProcessor } from "./messageProcessors/botReply.js";
import { useGroupVoiceRecordProcessor } from "./messageProcessors/botVoiceRecord.js";

const useBotMessageProcessor = (bot: Client) => {
  bot.on(BOT_MESSAGE_EVENT_ID, async (msg: GroupMessageEvent) => {
    useGroupChatRecordProcessor(msg);
    useGroupChatJrrpProcessor(msg);
    useGroupReplyRecordProcessor(msg);
    useGroupVoiceRecordProcessor(msg);
    useGroupChatGPTProcessor(msg)
    return;
  });
};
export { useBotMessageProcessor };
