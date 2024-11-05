---
sidebar_position: 1
---

# Loops

In Nouveau, you have to kind of loops : `while` and `for`.

## While loops

A `while` loop takes in a condition and evaluates it before each iteration.

    ```nv
    mut int counter = 10;

    while (counter > 0) {
        counter -= 1;
    }
    ```

## For loops

A `for` loop takes in a variable declaration (optional), a condition that is
evaluated before each iteration (optional) and an update statement (optional).

    ```nv
    for (mut int i = 0; i < 10; i += 1) {
        /// Some code...
    }
    ```
