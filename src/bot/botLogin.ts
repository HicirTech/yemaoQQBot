import { Client } from "oicq"
import { LOGIN_REQUEST_EVENT_ID, LOGIN_SUCCESSED_EVENT_ID, YEMAO_CHAT_GROUP_ID, YEMAO_QQ_ID } from "./botConstants.js"


const requestUserEnterKey = (bot: Client) => {
    process.stdin.once("data", () => {
        bot.login()
    })
}

const useBotLogin = (bot: Client) => {
    bot
        .on(LOGIN_REQUEST_EVENT_ID, () => requestUserEnterKey(bot))
        .login()
}

const useBotLoginCallBack = (bot: Client) => {
    bot.on(LOGIN_SUCCESSED_EVENT_ID, () => {
        bot.pickUser(YEMAO_QQ_ID).sendMsg(["机器人上线"])
        bot.pickGroup(YEMAO_CHAT_GROUP_ID).sendMsg(["机器人已上线"])
    })
}
export { useBotLogin, useBotLoginCallBack }
