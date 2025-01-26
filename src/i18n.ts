import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEN from "./locales/en/common.json";
import commonKO from "./locales/ko/common.json";
import userEN from "./locales/en/user.json";
import userKO from "./locales/ko/user.json";
import postEn from "./locales/en/post.json";
import postKO from "./locales/ko/post.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: commonEN,
    user: userEN,
    post: postEn,
  },
  ko: {
    common: commonKO,
    user: userKO,
    post: postKO,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
