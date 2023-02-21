const LOGIN_REQUEST_EVENT_ID = "system.login.qrcode";
const BOT_MESSAGE_EVENT_ID = "message"
const BOT_GROUP_MESSAGE_EVENT_ID = "message"

const LOGIN_SUCCESSED_EVENT_ID = "system.online";

const YEMAO_CHAT_GROUP_ID = 367166941;
const YEMAO_QQ_ID = 405167749;

const randomOf = (items:any[]) => items[Math.floor(Math.random() * items.length)];

export {
    LOGIN_REQUEST_EVENT_ID,
    LOGIN_SUCCESSED_EVENT_ID,
    YEMAO_CHAT_GROUP_ID,
    YEMAO_QQ_ID,
    BOT_MESSAGE_EVENT_ID,
    randomOf
}