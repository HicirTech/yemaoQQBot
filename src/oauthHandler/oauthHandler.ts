import express from "express";
import signale from "signale";
import { handleGoogleLoginCallback } from "../pocketbase/requestClient.js";
import { OAuthParameters } from "../types/pocketBaseEntity.js";

const REDIRECT_URL = "https://conductor.yemaoren.net/";
const EXPRESS_PORT = 3000;
const initExpressServer = () => {
  const app = express();

  const server = app.listen(EXPRESS_PORT, () => {
    signale.success(`Express server now listening on port ${EXPRESS_PORT}`);
  });

  app.get("/", (req, res) => {
    if (!global.oAuthParameters) {
      const oAuthPara = req.query;
      global.oAuthParameters = oAuthPara as unknown as OAuthParameters;
      signale.success(
        `Express server having result for oAuth, will no longer response to port ${EXPRESS_PORT}`
      );
      res.redirect(REDIRECT_URL);
      server.close(() => {
        signale.success(`Express server closed`);
        handleGoogleLoginCallback();
      });
    }
  });
};

export { initExpressServer };
