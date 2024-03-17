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

#### Drag and Drop your project
- Netlify host website statically, run `npm run build` to build into static site
- Drop the `simply folder to netlify`
- Pros: Deploy in no time. Very fast and easy. Require no DevOps knowledge
- Cons: Manually build and drop every time

#### Netlify Github Auto Deployment Pipeline
- Connect Netlify with Github (or others)
- Auto Deployment when target branch receive a new commit
- Auto Deployment can be disabled on `Build & deploy` page under `Branch and Deployment contenxt` section
- Environmental Varaibles, Split testing and more

### CI/CD Pipeline with Circle CI
- Allows developer to define their custom and more powerful CI/CD pipeline
- Work with netlify and other platform like Google or AWS
- Pipeline is described by YML file, with is Infrastructure as code

    ```yml
    # Use the latest 2.1 version of CircleCI pipeline process engine.
  version: 2.1
  jobs:
    test:
      docker:
        - image: node:18.16.1-bullseye
    
      steps:
        - checkout
        - run: npm install
        - run: npm test
    
    deploy:
      docker:
        - image: node:18.16.1-bullseye
      steps:
        - checkout
        - run: npm install
        - run: npm run build
        - run: ./node_modules/.bin/netlify deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_ACCESS_TOKEN --prod --dir=./build
  workflows:
    newbie-react-workflow:
      jobs:
        - test
        - deploy:
            requires:
              - test
    ```
- Unlike Repository on Netlify so Deployment is controlled by Circle CI
- Add Netlify Auth Credential to circle CI project Environment