---
id: Hooks
title: Hooks
---

By using Hooks we can make the code look cleaner, easier to read — a related logic can be tightly coupled in a custom hook.
By default there will be four predefined hooks provided in the chat app:-
* useBackHandler
* useConstants
* useLanguages
* useTheme

## Accessing Hooks
Open the hooks folder present in the root directory to access various hooks.

```
cd hooks
touch file.tsx
```

### UseBackHandler
This hook is used to handle the back press action when router moves from one page to another.

```
const useBackHandler = (handleBackPress: () => void) => {
    useEffect((): EffectCallback => {
        const backHandler: NativeEventSubscription = BackHandler.addEventListener('hardwareBackPress', handleBackPress)
        return () => backHandler.remove();
    });
}
```

### UseConstants
This hook is used to handle the App Constants which is defined in the DefaultConfig.ts inside the config folder present in the root directory.

```
const useConstants = (): AppConstants => {
  const { constants }: ApplicationConfig = useContext(ConfigContext)

  return constants;
}
```

### UseLanguages
This hook is used to handle the App Language which is defined in the language.ts inside the config folder present in the root directory.

```
const useLanguage = (): AppLanguage => {
  const { selectedLanguage }: AppConstants = useConstants()

  return languages[selectedLanguage];
}
```

### UseTheme
This hook is used to handle the App Theme which is defined in the theme.ts inside the config folder present in the root directory.

```
const useTheme = (): AppTheme => {
  const { selectedTheme }: AppConstants = useConstants()

  return themes[selectedTheme];
}
```
