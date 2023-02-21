import { getTodayJrrpViaQQ } from "./pocketbase/Jrrp.js";
import {
  initPocketBaseConnectionViaGoogle,
  initPocketBaseViaPassword,
} from "./pocketbase/requestClient.js";

const main = async () => {
  await initPocketBaseConnectionViaGoogle();
  // await initPocketBaseViaPassword();
};

main();
