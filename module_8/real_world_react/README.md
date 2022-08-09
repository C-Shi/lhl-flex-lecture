## Advanced React
- [x] Front End Routing and React Router
- [x] Referencing an object or component `useRef`

### React Router
* Native React App is single page, not respond to routing
  * Always have to start from "Home" page
  * No history available
* [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) is a routing library for React App
  * Use Single Page App to have front end "Routing"
  * Allow history
* Route Config

```jsx
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About user={user} />}></Route>
      <Route path="/connect" element={<Connect user={user} />}></Route>
    </Routes>
  </BrowserRouter>
```
* Navigation (Component vs Function)
    * Use a component to navigate -> When user's action trigger the navigate. Eg: User click on a hyperlink

      ```jsx
        <Link to='/'>Home</Link>
      ```

    * Run a function to navigate -> When your code trigger the navigate. Eg: Redirect to 404 when login fail

      ```js
        let navigate = useNavigate();
        navigate('/', { replace: true })
      ```

### useRef hook
* `useRef` is a hook that return an mutable object that do not trigger render
* Most common use of `useRef` is to refer to an element

  ```jsx
  const textarea = useRef(null)
  useEffect(() => {
    textarea.current.focus()
  }, [])
  <textarea ref={textarea}></textarea>
  ```

* `useRef` should not be abused.

### Deployment to Heroku
* Three deployment options
    1. Heroku CLI: Create and manage App through Terminal
    2. Github: Deploy from an authorized Github Repository
    3. Container Registery: Deploy Docker image using CLI