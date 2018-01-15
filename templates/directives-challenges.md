#This application is far from complete! Try spicing things up a bit by trying some of the following:

##Challenge 1
Currently the only way a user can be logged in is by registering a new user. Change this to create a new route for logging in. This means creating a new template that contains a form that asks a user for their username and password. This should then make an API call to the server and store the username and auth token in local storage.

##Challenge 2
All logged in users have their username and auth tokens stored in local storage. Users not logged don’t have this information stored in local storage. Use this information to build a logout mechanism by creating a new route that will link to a new controller and a new template that will inform users that they’ve been logged out. Try using store.remove(‘username’); and store.remove(‘authToken’); to achieve this!

##Challenge 3a
Try implementing a mechanism that will block users from accessing the todo page if there’s no auth token stored in local storage. This will require creating an if statement at the beginning of the TodoController to check if the auth token is present. We can do this using the following as an example Note: $location.path will redirect to the URL that is specified. The below example redirect a user to the registration URL if local storage doesn’t contain the authToken variable.
```

.controller('TodoController',function($scope, $location, TodoAPIService, store) {
    if (!store.get('authToken')) {
        $location.path("/accounts/register");
    }
    ...
});

```

##Challenge 3b
Do the same thing again with the login and registration controllers to redirect a user to their todo page if they’ve successfully been logged in.

##Challenge 4
Add an indication on the navbar to tell the user if they’re logged in, and if so show their username.

##Challenge 5
See if you can add a bit of code to close the Create New Todo Item modal window after the Create button was pressed.

##Challenge 6
Play around and see if you can make it pretty!