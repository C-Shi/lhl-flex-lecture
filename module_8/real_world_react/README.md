## Advanced React
- [x] Front End Routing and React Router
- [x] Extracting State Logic with `useReducer`
- [x] Deployment to Heroku

### React Router
* Native React App is single page, not respond to routing
  * Always have to start from "Home" page
  * No history available
* [React Router (v6)](https://reactrouter.com/en/main) is a routing library for React App
  * Use Single Page App to have front end "Routing"
  * Allow history
* Route Config

```jsx
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/connect" element={<Connect />}></Route>
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

### useReducer
* Reducer consolidate state logic for centralize management
* Customize how to update states
* "Reduce" means take in multiple arguements and return single output
* Manage complicated state
* It cannot do anything that `useState` cannot do

```js
  const onFormEvent = (state, event) => {
    return {...state, [event.target.name]: event.target.value }
  }

  const [feedback, dispatch] = useReducer(onFormEvent, {
    name: '',
    email: '',
    comment: '',
    rate: '1',
  })
```

### Deployment to Heroku
* Three deployment options
    1. Heroku CLI: Create and manage App through Terminal
    2. Github: Deploy from an authorized Github Repository
    3. Container Registery: Deploy Docker image using CLI