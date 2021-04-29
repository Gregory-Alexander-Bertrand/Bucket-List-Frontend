# Bucket-List-Frontend


## Overview
The bucket-list app is similar to the to-do-list app, but on a level or more importance. Instead of adding mundane tasks to a list, you can add
those special goals that you want to achieve.

## User Stories
When the user loads the app, they're greeted with a home page with the name of the app, and a navigation bar with a link for sign up and login.
Once the user logs-in or signs-up, the login/sign up links in the navigation bar will be replaced by a logout link, and two new links, "my list" and
"create new list". If they are a first time user, the my list section will be empty, but, I've they've been to the site before and made a list,
they can see the list they made. In the create new list section, there will be an input bar in the middle of the page, with an empty div below.
Each time the user enters an item, it appears in a list form below. At the bottom of the list, there will be a save and discard button.
Once the list is saved/created, when the user goes to their list section, they will be able to see the list they created. In this section,
by each item on the bucket list, there will be an edit/update button that, when pressed, opens a text box or input bar below where they can
provided updates on what it was like to complete the event on the list. Here the user can also totally remove an event if they change their mind.

## MVPS
* A home page with a greeting.
* A login and sign up form, each on their own page.
* A page with a way for users to make a custom bucket-list.
* A user has the ability to delete and update/comment on goals on the list.
* A way for a user to logout.

## Stretch goals

* A see other user list page where you can see what other people have on their list.
* A Topics page where the user can pick a topic I.E. skydiving, and see the users who added skydiving to their list.
* Each list could have a comment section where users can interact.
* A way for a user to favorite a bucket-list item from another user's list.

## Routes Inventory

| Routes      | Path      | Summary              |
| ------------|-----------|--------------------- |
| Post        | /create   | user signup          |
| Post        | /login    | user login           |
| Post        | /create   | make list            |
| Put         | /update   | update list          |
| Get         | /find     |get all item          |
| Delete      | /destroy  | remove item from list|