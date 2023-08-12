# Custom Hooks

- [x] Reviews of React Hook

## React Hooks
*Hooks* let you use different React feattures from your components

**State Hooks**
- *State* lets a component remember information information between render cycle
- `useState` declares a state variable that you can read and update directly
- `useReducer` declares a state variable with your own update logic called `reducer function`
- State is immutable

**Effect Hooks**
- *Effect* let a component connect to external system
- `useEffect` allow certain side effect to run at certain stage of component lifecycle

## Challenging of Built-in Hooks
1. A complicated component may involve multiple states / effects.
2. Different Components may share similar structures of state

## Custom Hooks
1. Seperate rendering from logic
    - Let custom hooks handle the data manipulation
    - React component only access data/logic it use directly
2. Reusing Logic
3. custom hook has to be a function named `useXXX`
4. A custom hook can also use another custom hook
5. Centralize all states into a single component (Redux Alternative)