---
id: Languages
title: Languages
---

By default there will be five different app languages provided in the chat app settings:-
* English (EN)
* French (FR)
* German (GR)
* Spanish (SP)
* Chinese (CH)

## Accessing Languages
Open the config folder present in the root directory to access the Languages file.

```
cd config
touch language.ts
```

```
export enum LanguageKey {
  en = "en",
  fr = "fr",
  sp = "sp",
  gr = "gr",
  ch = "ch"
}

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
  [LanguageKey.sp]: sp,
  [LanguageKey.gr]: gr,
  [LanguageKey.ch]: ch,
}
```

As you can see there are various predefined languages in the above mentioned file. You can add more languages to use in the chat app.
