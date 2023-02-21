import {
  DiscussMessageEvent,
  GroupMessageEvent,
  PrivateMessageEvent,
  segment,
} from "oicq";
import { createGroupChatRecord } from "../../pocketbase/GroupChatRecord.js";
import { createJrrp, getTodayJrrpViaQQ } from "../../pocketbase/Jrrp.js";
import { IGroupChatRecord } from "../../types/pocketBaseEntity.js";
import { randomOf, YEMAO_CHAT_GROUP_ID } from "../botConstants.js";
import fs from "fs-extra";
import path from "path";

const DIO_LANGUAGES = [
  "感觉就像比冰柱捅进了屁股一样",
  "JoJo, 这是我最后的波纹了",
  "真不愧是dio, 竟然毫不在意地干下这种我们没胆干的事！",
  "承太郎，你上当了！这就是我要逃走的路线!",
  "但是，我拒绝!",
  "这是替身攻击！",
  "JoJo, 我不做人类啦！",
  "我可以跟你一起洗澡吗",
];

const ASSET_DIR_PATH = path.resolve("./jrrpAsserts/");

const useGroupChatJrrpProcessor = async (msg: GroupMessageEvent) => {
  const { sender, raw_message } = msg;

  const trimmedMsg = raw_message.trim();
  if (trimmedMsg === "/jrrp") {
    const { user_id, card, nickname } = sender;
    const datetime = new Date(msg.time * 1000 + 31680000);
    const messageDateString = datetime.toISOString().split("T")[0];

    const todayJrrp = await getTodayJrrpViaQQ(
      messageDateString,
      user_id.toString()
    );
    if (!todayJrrp) {
      const jrrpToCreate = {
        qq: user_id,
        today: messageDateString,
        jrrp: Math.floor(Math.random() * 100) + 1,
      };

      const newJrrp = await createJrrp(jrrpToCreate);
      msg.reply(
        `看来你今天是第一次问\n你的今天的人品值是:${newJrrp.jrrp}`,
        true
      );

      if (Math.random() < 0.3) {
        const randomImageFileName = randomOf(fs.readdirSync(ASSET_DIR_PATH));
        const randomImagePath = path.join(ASSET_DIR_PATH, randomImageFileName);
        msg.reply(segment.image(randomImagePath), true);
      }
    } else {
      const randomDioMsg = randomOf(DIO_LANGUAGES);

      const replyingLanguage = [
        "你今天也不是第一次问了",
        randomDioMsg,
        `你的今天的人品值是:${todayJrrp.jrrp}`,
      ].join("\n");

      msg.reply(replyingLanguage, true);
    }
  }
};

export { useGroupChatJrrpProcessor };
