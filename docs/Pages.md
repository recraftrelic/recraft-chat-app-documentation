---
id: Pages
title: Pages
---

In the App there are six pages which can be easily customizable by editing their constant file:-
* Login
* Signup
* ChatList
* ChatUser
* ChatGroup
* ChatDetails
* ChatSetting
* ChatProfile

## Accessing Pages
Open the pages folder present in the root directory to access the index.tsx & constant.ts files

```
cd pages
touch index.tsx & constant.ts
```

### Login Page
The login page allows a user to gain access to the chat app by entering their username and password or by authenticating using a social media login.
We have also added validation for the user to enter the username & password valid by using Micro validator.

<p align="center">
  <img width="250" src="../../img/login.png">
</p>

### Signup Page
The signup page allows a user to gain access to the chat app by creating their account in the app or by authenticating using a social media login.
We have also added validation for the user to enter the name, email, username & password valid by using Micro validator.

<p align="center">
  <img width="250" src="../../img/signup.png">
</p>

### ChatList Page
The chat list page displays the main chat interface with whom you have completed your chat till now.
we can also view the profile photo of other peoples attached with us and we can also view the pending messages of the chat's which you haven't read till now.

By clicking on plus icon you can view a dropdown menu which is displayed with two options: 
* New Chat
* New Group

For the demonstration for the dropdown menu you can see the second mobile screenshot.

<p align="center">
  <img width="250" style="display: inline-block; margin: 0;" src="../../img/chatlist.png"><img width="250" style="display: inline-block; margin: 0;" src="../../img/dropdown.png">
</p>

### ChatUser Page
The chat user page displays a list of users and on click of any user you can select that user but you can only select one user at a time.
By selecting any user it will be highlighted and you can now able yo see a next button at the bottom of the screen.
On click of selected user you can visit to the users detail page.

<p align="center">
  <img width="250" src="../../img/chatuser.png">
</p>

### ChatGroup Page
The chat group page also displays the same list of users and on click of any user you can select that user but you can also select multiple user at a time.
The selected users will be highlighted and displayed at the Top Section just below the New Group title and on the extreme right side you can see a next button.
By clicking on the next button you can able to see a modal window in which you need to enter the group name and you can click on next button to the create group detail page.

<p align="center">
  <img width="250" style="display: inline-block; margin: 0;" src="../../img/chatgroup.png"><img width="250" style="display: inline-block; margin: 0;" src="../../img/group.png">
</p>

### ChatDetails Page
The chat detail page is used to view the messages of the particular person whom you have selected on the chatlist page.
we can also share photos, videos, docs etc. via messages to the peoples who are joined with us.

<p align="center">
  <img width="250" src="../../img/chatsetting.png">
</p>

### ChatSetting Page
The chat setting page allows a user to change its photo, name, status etc.
We can also change app theme & language according to user needs.
and we can also logout the current account to add new account.

<p align="center">
  <img width="250" src="../../img/chatdetail.png">
</p>

### ChatProfile Page
The chat profile page allows a user to see the particular person profile photo, full name & status.
We can also block, report, delete conversation between the person and the user.

<p align="center">
  <img width="250" src="../../img/chatprofile.png">
</p>

