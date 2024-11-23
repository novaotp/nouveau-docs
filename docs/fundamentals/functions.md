---
sidebar_position: 1
---

# Functions

## Declaring functions

To organize your code into blocks, you can put them inside functions.

A function's syntax is pretty straightforward : `<return-type> <name>(<parameters>) { ... }`.

### Examples

Here are some practical examples.

#### Without parameters

    ```nv
    string greet() {
        return "Hello, World!";
    }
    ```

#### With parameters

    ```nv
    int add(int a, int b) {
    int add(int a, int b) {
        return a + b;
    }
    ```

#### With parameters and default values

    ```nv
    int add(int a = 0, int b = 0) {
    int add(int a = 0, int b = 0) {
        return a + b;
    }
    ```

## Calling a function

Calling a function is very simple too. You put the name of the function
followed by the parameters between parentheses.

    ```nv
    int add(int a = 0, int b = 0) {
    int add(int a = 0, int b = 0) {
        return a + b;
    }

    add(); // Calls with default values
    add(1); // Calls with a = 1 and b = 0
    add(5, 10); // Calls with a = 5 and b = 10
    ```
