---
id: Reducers
title: Reducers
---

By using reducers you can easily access config reducer for the router.

## Accessing Reducers
Open the reducers folder present in the store directory to access various config reducers.

```
cd reducers
touch config.ts
```

```
enum ThemeActionType {
    SET_THEME = "SET_THEME",
    SET_LANGUAGE = "SET_LANGUAGE"
}

interface ThemeAction {
    type: ThemeActionType,
    payload: any
}
```

```
SET_THEME: (state, action) => {
    return {
        ...state,
        constants: {
            ...state.constants,
            selectedTheme: action.payload
        }
    };
},
SET_LANGUAGE: (state, action) => {
    return {
        ...state,
        constants: {
            ...state.constants,
            selectedLanguage: action.payload
        }
    };
},
```

As you can see we have defined theme & language action type in the above mentioned file. 