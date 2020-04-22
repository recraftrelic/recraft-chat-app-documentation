---
id: Router
title: Router
---

By using router you can easily achieve routing from one page to another page.

## Accessing Routes
Open the Router folder present in the root directory to access the router file.

```
cd router
touch index.tsx
```

```
<ConfigContext.Provider value={configReducer}>
    <ThemedView style={style.container}>
        <NativeRouter>
            <BackHandlerHOC>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/chatlist" component={ChatList} />
                    <Route exact path="/chat/" component={ChatDetails} />
                    <Route exact path="/profile" component={ChatProfileDetail} />
                    <Route exact path="/settings" component={ChatSetting} />
                </Switch>
            </BackHandlerHOC>
        </NativeRouter>
    </ThemedView>
</ConfigContext.Provider>
```

As you can see there are various route defined in the above mentioned file. You can add more route to use in the chat app.