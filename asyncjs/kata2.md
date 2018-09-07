# Kata 2: Implement the following async functions

Fetch API `https://jsonplaceholder.typicode.com/users` to get users data. Find the user whose location is the closes to your device's location. Display the user's name. Use callbacks to handle asynchronousity.

```javascript
getUsers(api, fn)
getClosestUser(positions, fn)
displayName(user, fn)
```

Hint: use `navigator.geolocation.getCurrentPosition()` to get your location.
