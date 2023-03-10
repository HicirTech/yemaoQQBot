interface OAuthParameters {
  state: string;
  code: string;
  scope: string;
  authuser: string;
  prompt: string;
}

interface pocketBaseRecord {
  collectionId?: string;
  collectionName?: string;
  created?: string;
  id?: string;
  updated?: string;
  expand?: any;
}

interface IJrrp extends pocketBaseRecord {
  jrrp: number;
  qq: number;
  today: string;
}

interface IGroupChatRecord extends pocketBaseRecord {
  msg: string;
  senderName: string;
  senderQQ: string;
  time: string;
}
interface IBotCredentials extends pocketBaseRecord {
  qqNo: string;
  qqPass: string;
}

interface IChatGPTKey extends pocketBaseRecord {
  key: string;
}

export type {
  IJrrp,
  IGroupChatRecord,
  OAuthParameters,
  IBotCredentials,
  IChatGPTKey,
};
