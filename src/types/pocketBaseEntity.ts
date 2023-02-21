import { Record } from "pocketbase";
interface OAuthParameters {
  state: string;
  code: string;
  scope: string;
  authuser: string;
  prompt: string;
}

interface IJrrp extends Record {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  jrrp: number;
  qq: number;
  today: string;
  updated: string;
  expand: any;
}

interface IGroupChatRecord extends Record {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  msg: string;
  senderName: string;
  senderQQ: string;
  time: string;
  updated: string;
  expand: any;
}

export type { IJrrp, IGroupChatRecord, OAuthParameters };
