// gtm.js
import TagManager from "react-gtm-module";
const gtmId = "G-170XF4N29K"; // Replace with your GTM ID

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId });
};
