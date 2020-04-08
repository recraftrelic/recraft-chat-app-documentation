---
id: Constants
title: Constants
---

By using constants you can easily manage & access the static values or items throughout the app.

## Accessing Constants
Open the config folder present in the root directory to access the constants file.

```
cd config
touch DefaultConfig.ts
```

```
export const defaultConfig: ApplicationConfig = {
    constants: {
      selectedTheme: ThemeKey.light,
      selectedLanguage: LanguageKey.en,
      dateFormats: {
        chatDateFormat: "MM/DD/YY",
        chatHourDisplayFormat: "hh:mm A",
        chatYesterdayText: "Yesterday",
      },
      appLogo: require("../app-logo.png"),
    }
}
```

As you can see there are various predefined constants in the above mentioned file. You can add more constants to use in the chat app.
