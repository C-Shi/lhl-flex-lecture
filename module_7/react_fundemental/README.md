# React Fundamentals

## What is React.js
1. A Front-end JavaScript Library/Framework
2. Component-Based
3. Declarative views

## React Sample Code

## HTML Element vs Component
#### Similarity
* Both have a tree hierarchy
* Both affect the layout of DOM

#### Differences
* React Components are like "super" component
* React Component have function behavior -> In some case it is a function
* React Re-render when state change

## Component Structure
* Functional Component is just a JavaScript function
* Component will return a html-like structure
* Component follow nested structure and can have child

```js
function Counter() {
  return (
    <div>
      <Title />
      <div>3</div>
      <button>Add</button>
    </div>
  )
}

function Title() {
  return (
    <h3>Incremental Counter</h3>
  )
}
```

## JSX
1. Template Engine for React. (similar to EJS for Express)
2. Every component return JSX.
3. Syntax:
    * JSX read all regular HTML
    * JSX allows you to evaluate javascript using `{}`
    * JSX allows you to embeded other component `<Title />`
4. A few notes:
    * Each component should only return one **Root** HTML element
    * You use `className` to indicate css class
    * You can pass javascript object as styling to a component
    * each element need to be closed. So use `<input />` or `<input></input>` instead of `<input>`

```js
function Counter() {
  const style = {
    border: '1px solid black',
    padding: '50px',
    width: '100px',
    textAlign: 'center',
    fontSize: '32px'
  }

  return (
    <div>
      <Title />
      <div style={style}>3</div>
      <button>Add</button>
    </div>
  )
}
```

## Componenent-local State
1. Rect compoonent has its own data called `state`
2. Use `useState` hook to read and write to the state
3. State create a data-binding and will trigger re-render when changed
4. React response to all regular JavaScript event

```js
function Counter() {
  // count is getter, setCount is setter, 0 is initial value
  const [count, setCount] = useState(0);

  const style = {
    border: '1px solid black',
    padding: '50px',
    width: '100px',
    textAlign: 'center',
    fontSize: '32px'
  }

  return (
    <div className="counter">
      <Title />
      <div style={style}>{count}</div>
      // Camel case event
      <button onClick={() => { setCount(count + 1) }}>Add</button>
    </div>
  )
}
```

## Properties or Props
1. **Props** is the data passed from parent to child
2. In react, we pass props just as we sould set attribute on HTML
3. **Props** is inmutable in child
4. Change of props value will also trigger re-render

```js
function Counter() {
  return (
    // from parent, pass a props called title
    <Title title="Incremental Counter" />
  )
}

function Title(props) {
  return (
    // read the title from props
     <h3>{props.title}</h3>
  )
}
```

## Create React App
1. A npx command to quickly generate a react application. https://github.com/facebook/create-react-app
2. `create-react-app` will generate an front-end only application with a static server
3. Save your time in configuration and import

```bash
npx create-react-app my-app
cd my-app
npm start
```

4. You will be working inside of the `src` folder
5. All components, if trace up, should end at `App` component