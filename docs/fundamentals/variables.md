---
sidebar_position: 1
---

# Variables

Let's see how to handle variables.

## Defining a variable

To define a variable, we start with either `mut` or `const`. This modifier
respectively allows or forbids assigning to our variable.

    ```nv
    /// An example of a constant variable
    const string message = "Hello, World!";
    message = "Not allowed"; /// This will not compile

    /// An example of a mutable variable
    mut int counter = 0;
    counter = 1; /// This compiles !
    ```

## Assigning to a variable

You can assign a new value to a variable with the `=` operator.

    ```nv
    mut int value = 0;
    value = 1;
    ```

You can also assign the value of a variable to another variable.

    ```nv
    const int counter = 0;

    mut int value = counter;
    ```

However, note that the types must still match.

    ```nv
    const string message = "Hello, World!";

    const int counter = message; /// This will NOT compile because the type don't match.
    ```
