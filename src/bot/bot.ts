import { createClient } from "oicq"
import { useBotLogin, useBotLoginCallBack } from "./botLogin.js";
import { useBotMessageProcessor } from "./botMessageProcessor.js";

const startChatBot = async (qqNo: string) => {
    const intQQNo = parseInt(qqNo);
    const bot = createClient(intQQNo)

    useBotLogin(bot);
    useBotLoginCallBack(bot);
    useBotMessageProcessor(bot);

    return bot;

}

export { startChatBot }