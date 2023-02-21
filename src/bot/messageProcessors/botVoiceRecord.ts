import { GroupMessageEvent, segment } from "oicq";

import path from "path";
const ASSET_DIR_PATH = path.resolve("./voiceRecordAsset/");

const voiceRecordPathMap = {
  ye_shou_e_chou: path.join(ASSET_DIR_PATH, "chou.amr"),
  gou_li_guo_jia_sheng_si_yi: path.join(ASSET_DIR_PATH, "gou.amr"),
  ji_ni_tai_mei: path.join(ASSET_DIR_PATH, "ji.amr"),
  ni_gan_ma: path.join(ASSET_DIR_PATH, "niganma.amr"),
};

const useGroupVoiceRecordProcessor = (msg: GroupMessageEvent) => {
  const { raw_message } = msg;

  const trimmedMsg = raw_message.trim();
  if (["野兽前辈", "臭"].includes(msg.raw_message.trim())) {
    msg.reply(segment.record(voiceRecordPathMap.ye_shou_e_chou), true);
  }

  if (["苟"].includes(trimmedMsg)) {
    msg.reply(
      segment.record(voiceRecordPathMap.gou_li_guo_jia_sheng_si_yi),
      true
    );
  }

  if (["只因", "鸡"].some((subStr) => trimmedMsg.includes(subStr))) {
    if (Math.random() < 0.3) {
      msg.reply(segment.record(voiceRecordPathMap.ji_ni_tai_mei), true);
    } else {
      msg.reply(segment.record(voiceRecordPathMap.ni_gan_ma), true);
    }
  }
};

export { useGroupVoiceRecordProcessor };
