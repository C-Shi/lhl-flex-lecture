- [x] HTTP Stateless and cookies
- [x] Read and Set cookie
- [x] User Authentication with cookie
- [x] Session vs Cookies

### HTTP Statless
1. HTTP don't remember states after a request/response cycle end
2. But sometimes it is necessary to "Remember" something from previous request
![first request](./image/stateless_http_1.png)
![second request](./image//stateless_http_2.png)

### HTTP Cookies
1. A piece of key/value pair stored in browser
2. Carried between HTTP requests
3. To identify a user, to track website visits, to optimized user experience, etc
4. READ cookie from request, and SET cookie in response
5. `cookie-parser` is a npm package that manage cookies in express

  ```js
  app.get('/cookie', (req, res) => {
    // read cookie
    const userId = req.cookies.userId;

    // set cookie
    res.cookie('userId', 1);
  })
  ```

### Session / Cookie based session
1. A temporary and interactive information interchange between two communicating devices
2. Information store on the server side.
3. Server provide a key `session_id` to access the session data, using cookie
4. Session provide extra layer of security as information is stored on the server

### User Auth Workflow
1. Login
    - Obtain user credential from HTTP `POST` request body
    - Look up user in database
    - Register user to session using unique key/token

2. Logout
    - Clear cookies that represent user identity through a `POST` request

3. Registeration
    - Obtain new user information from HTTP `POST` request body
    - Create a new user (perform duplicate check if applicable)
    - Login the new user directly

4. Visit
    - read cookie representing user identity
    - Perform session lookup to identify user
    - render response based on identity