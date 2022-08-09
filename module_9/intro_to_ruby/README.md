### Programming Paradigms
1. A way of organizing and describing languages based on ideological design decision
2. **Imperative** vs **Declarative** languages
    * Imperative programming: telling computer how to do some work
    * Declarative programming: telling computer what to achieve
3. Type Safety
    * The extent a language prevents type errors
    * Weekly type language favor developers' ease of use
    * Strongly type language favor correctness
    ```js
      function sum(a, b) {
        return a + b;
      }
      // 10
      console.log(sum(5, 5));
      // ABCD
      console.log(sum('AB', 'CD'));
    ```

    ```c
      // staticly type checking
      int sum(int a, int b)
      {
          return (a + b);
      }
      // 10
      printf("%d", sum(5, 5));
      // error: expected ‘int’ but argument is of type ‘char *’
      printf("%s", sum("AB", "CD"));
    ```

### JavaScritp vs Ruby - Similarity
* Dynamically typed - Change type is permitted
  ```js
  // JavaScript
  let variable = 'Hello';
  variable = 100;
  ```
  ```rb
  # Ruby
  variable = 'Hello'
  variable = 100
  ```

### JavaScript vs Ruby Difference
* JavaScript don't protect type errors. Ruby cares about types
    ```js
    // JavaScript
    console.log(100 + '100') // 100100
    ```
    ```rb
    # Ruby
    # TypeError (no implicit conversion of Integer into String)
    puts 100 + '100'
    ```