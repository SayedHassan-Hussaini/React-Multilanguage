import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const resources = {
  en: {
    translation: {
      "welcome-message": "Welcome to React and react-i18next",
    },
  },
  fr: {
    translation: {
      "welcome-message": "Bienvenue à React et react-i18next",
    },
  },
  pr: {
    translation: {
      "welcome-message": "خوش آمدید به React همراه i18next",
    },
  },
};
const option = {
  // order and from where user language should be detected
  order: [
    "htmlTag",
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },
};

const backendOption = {
  loadPath: "/lang/{{lng}}/translation.json",
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "pr"],
    // resources,
    // lng: document.querySelector("html").lang,
    fallbackLng: "en",
    detection: option,
    backend: backendOption,
    react: { useSuspense: false },
  });

export default i18n;
