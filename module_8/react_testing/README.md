### Type of Testing
* Unit - testing a specific function
* Integration - testing various pieces working together
* End-to-end - testing the app holistically like a user
* Regression - bug testing
* Static - Linting
* Manual - You run the code

### Testing Library
* Jest
  * The framework to run our tests
  * Come with `create-react-app` no need to configure
  * `npm run test` will start Jest in watch mode
* DOM Testing Library
  * A set of tools to help target DOM elements and trigger DOM events
* React Testing Library
  * Built on top of DOM Testing Library, specifically for React


### Unit Test with React
* Test against a single function
* Target Function need to be exported
* Usually test against a helper file, instead of function directly inside a component
* Test file will be host inside of any `__tests__` folder. `Jest` will pick up automatically
* convention is to name test file as `xxx.test.js`

```js
describe("findIcon function", () => {
  test('return 🗿 if passing rock', () => {
    expect(findIcon('Rock')).toBe('🗿')
  })
})
```

### Integration Test for Component
1. Simulate what use would see / use. 
2. Less worry about how small pieces work
3. Steps: 
    1. Simulate a render
    2. Grab the test target
    3. Assertion

```js
  const { container } = render(<Result status={fakeGame.status} />)
  expect(getByTestId(container, 'result-footer')).toHaveTextContent("Waiting for your selection")
```

### Event and Mocking
1. Use `fireEvent` to simulate an DOM event, such as user click
2. Use Mocking function `jest.fn` to **Replace** an external function with a mocking in test
3. We don't want to call acutal function over and over, eg: API called. State update

```js
  const mockClick = jest.fn(() => {})
  const { getByTestId } = render(<Result status='Win' restartGame={mockClick} />)

  const button = getByTestId("result-restart")
  fireEvent.click(button)

  expect(mockClick).toHaveBeenCalled()
```

### Test Coverage
* Metric to track the code execution through testing
* You want to get as much coverage as possible, but also be realistic
* run `npm test -- --coverage --watchAll=false` to see report