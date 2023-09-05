## Advanced React
- [x] Front End Routing and React Router
- [x] Deploy your React App to Netlify
- [x] CI/CD Pipeline

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

### Deploy your React App to Netlify
* Activities that make software available to use
* Netlify is a Platform as a Service (PaaS) cloud solution
* You can Drag and Drop or use Default CD pipeline

### CI/CD Pipeline with Circle CI