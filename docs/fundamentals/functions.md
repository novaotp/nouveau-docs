---
sidebar_position: 1
---

# Functions

## Declaring functions

To organize your code into blocks, you can put them inside functions.

A function's syntax is pretty straightforward : `fn <type> <identifier>(<parameters>) { ... }`.

### Examples

Here are some practical examples.

#### Without parameters

    ```nv
    fn void greet() {
        /// Some code...
    }
    ```

#### With parameters

    ```nv
    fn int add(const int a, const int b) {
        return a + b;
    }
    ```

#### With parameters and default values

    ```nv
    fn int add(const int a = 0, const int b = 0) {
        return a + b;
    }
    ```

## Calling a function

Calling a function is very simple too. You put the name of the function
followed by the parameters between parentheses.

    ```nv
    fn int add(const int a = 0, const int b = 0) {
        return a + b;
    }

    add(); // Calls with default values
    add(1); // Calls with a = 1 and b = 0
    add(5, 10); // Calls with a = 5 and b = 10
    ```
