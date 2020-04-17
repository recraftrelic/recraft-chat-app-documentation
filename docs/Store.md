---
id: Store
title: Store
---

By using store you can easily access config reducer for the router.

## Accessing Store
Open the Store folder present in the root directory to set the config reducer.

```
cd store
touch index.ts
```

```
const reducer = combineReducers({
    configReducer
})

const store = createStore(
    reducer
)
```

As you can see we have defined reducer & store in the above mentioned file. 