---
id: Themes
title: Themes & Languages
---

By default there will be two different app themes provided in the chat app settings:-
* lightTheme
* darkTheme

## Accessing Themes
Open the config folder present in the root directory to access the themes file.

```
cd config
touch themes.ts
```

```
export const darkTheme: AppTheme = {
    backgroundColor: "#000000",
    highlightColor: "grey",
    highlightTextColor: "#ffffff",
    textColor: "#fff",
    lightTextColor: "#b3b3b3",
    lightBottomColor: "#666666",
    alternateMessageBackgroundColor: '#4682b4',
    modalBackgroundColor: 'rgba(0,0,0,0.5)',
    warningColor: '#FF0000',
    errorColor: '#FF0000',
    appColor: '#ed5d45',
  }
  
export const lightTheme: AppTheme = {
    backgroundColor: "#ffffff",
    highlightColor: "green",
    highlightTextColor: "#ffffff",
    textColor: "#333",
    lightTextColor: "#b3b3b3",
    lightBottomColor: "#e6e6e6",
    alternateMessageBackgroundColor: '#B0E0E6',
    modalBackgroundColor: 'rgba(0,0,0,0.5)',
    warningColor: '#FF0000',
    errorColor: '#FF0000',
    appColor: '#ed5d45',
}
```

You can change the predefined values or text according to your requirements.
If you need to add more themes in the app just define the theme name & various style properties in the above mentioned file.

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
```

As you can see there are various predefined languages in the above mentioned file. You can add more languages to use in the chat app.
