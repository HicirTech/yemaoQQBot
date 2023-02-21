import { GroupMessageEvent, segment } from "oicq";
import { ChatGPTAPI } from "chatgpt";

async function example() {}

const useGroupChatGPTProcessor = async (msg: GroupMessageEvent) => {
  const { raw_message } = msg;

  const trimmedMsg = raw_message.trim();

  if (
    trimmedMsg.startsWith("/智障机器人") &&
    raw_message.split("/智障机器人").length > 1
  ) {
    try {
      const api = global.chatGPTObject;
      const queryMsg = raw_message.split("/智障机器人")[1];
      const res = await api.sendMessage(queryMsg);
      msg.reply(res.text, true);
    } catch (error) {
      msg.reply(
        ["Chat GPT API他有点问题\n", "这是报错\n", JSON.stringify(error)],
        true
      );
    }
  }
};

export { useGroupChatGPTProcessor };
