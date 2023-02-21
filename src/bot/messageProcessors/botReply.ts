import { GroupMessageEvent, segment } from "oicq";

import path from "path";
const ASSET_DIR_PATH = path.resolve("./imageAssets/");

const imageMapping = {
  v50: path.join(ASSET_DIR_PATH, "v50.jpg"),
};

const useGroupReplyRecordProcessor = (msg: GroupMessageEvent) => {
  const { raw_message } = msg;

  const trimmedMsg = raw_message.trim();
  if (
    ["我50", "我五十", "v50", "V50"].some((subStr) =>
      trimmedMsg.includes(subStr)
    )
  ) {
    msg.reply(segment.image(imageMapping.v50), true);
  }
};

export { useGroupReplyRecordProcessor };
