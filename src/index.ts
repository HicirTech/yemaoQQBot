import { BaseModel } from "pocketbase";
import { createGroupChatRecord } from "./pocketbase/GroupChatRecord.js";
import { createJrrp, getTodayJrrpViaQQ } from "./pocketbase/Jrrp.js";
import {
  initPocketBaseConnectionViaGoogle,
  initPocketBaseViaPassword,
} from "./pocketbase/requestClient.js";

const main = async () => {
  // await initPocketBaseConnectionViaGoogle();
  await initPocketBaseViaPassword();
};

main();
