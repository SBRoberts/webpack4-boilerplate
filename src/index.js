import "@babel/polyfill";
import domEvents from "dom-events";

import InitApp from "./app";

export const welcomeMessage = () => {
  console.info(
    "%cspen.io%c✌",
    `font-size: 30px; color: white; background: mediumspringgreen; padding: 10px; text-align: center; width: 100%;  line-height: 100px; padding-bottom: 5px;
    font-family: 'Bungee Shade', helvetica, sans-serif; @font-face {
      font-family: 'Bungee Shade';
      url('https://fonts.googleapis.com/css?family=Bungee+Shade') format('woff2'), /* Super Modern Browsers */
      url('https://fonts.googleapis.com/css?family=Bungee+Shade') format('woff'), /* Pretty Modern Browsers */
      url('https://fonts.googleapis.com/css?family=Bungee+Shade')  format('truetype'), /* Safari, Android, iOS */
    };`,
    "font-size: 40px; color: white; background: mediumspringgreen; padding: 10px; text-align: center; width: 100%; line-height: 95px;"
  );
};

domEvents.on(window, "DOMContentLoaded", async () => {
  try {
    welcomeMessage();
    InitApp();
  } catch (error) {
    console.error(error);
  }
});
