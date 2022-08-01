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

```js
describe("findIcon function", () => {
  test('return 🗿 if passing rock', () => {
    expect(findIcon('Rock')).toBe('🗿')
  })
}
```