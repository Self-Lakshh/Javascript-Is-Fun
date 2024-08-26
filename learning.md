# 📖 THE JAVASCRIPT MASTERCLASS NOTEBOOK & MISTAKES LOG

This journal details my daily notes, concept reviews, and a log of mistakes encountered while learning JavaScript.

---

## 💡 Core Concept Reviews

### 1. Variables & Scope (`var` vs `let` vs `const`)
* **var**: Function-scoped. It ignores block statements (like `if` or `for`). Declaring `var` inside a block leaks it to the surrounding scope. It is hoisted and initialized as `undefined`.
* **let**: Block-scoped. Declaring it inside curly braces `{}` binds it to that block. It is hoisted but remains in the Temporal Dead Zone (TDZ) until declared, throwing a `ReferenceError` if accessed early.
* **const**: Block-scoped, read-only. Once assigned, you cannot reassign it. However, the properties of a const object or elements of a const array *can* be modified because only the reference pointer is locked!
```javascript
if (true) {
  var x = 10; // leaks
  let y = 20; // isolated
}
console.log(x); // 10
// console.log(y); // ReferenceError
```

### 2. Primitive vs Reference Types (Stack vs Heap)
* **Primitives** (Number, String, Boolean, null, undefined, Symbol, BigInt): Stored directly on the Stack. Copying copies the actual *value*.
* **Reference Types** (Objects, Arrays, Functions): Stored on the Heap. The stack variable only holds a pointer reference to the memory location on the heap. Copying copies the *reference pointer*, so changing the copy mutates the original.
```javascript
let listA = [1, 2];
let listB = listA; // copies pointer
listB.push(3); // both are now [1, 2, 3]!
```

### 3. Equality (`==` vs `===`)
* **Double Equals (==)**: Compares values by converting both variables to a common type first (implicit coercion). Can result in unexpected behaviors like `0 == ""` resolving to `true`.
* **Triple Equals (===)**: Strict equality. Compares both the value and the type without any coercion. `0 === ""` resolves to `false`.

### 4. Loops & Flow Control
* **for / while**: Evaluates conditional statements before executing the loop code.
* **do-while**: Runs the loop code at least once before checking the condition.
* **switch**: Checks specific value cases using strict equality checks (`===`). Always include a `break` statement in each case to prevent the execution from cascading down!

### 5. Functions & Context
* **Declarations**: Fully hoisted, meaning you can call them before they are declared in the code file.
* **Expressions & Arrows**: behave like variables and stay in the TDZ until defined.
* **Arrow Functions**: Do not bind their own `this` keyword. They inherit the `this` context lexically from their surrounding parent block.

### 6. Array Methods
* **push/pop**: Add/remove elements at the end of the array (O(1)).
* **shift/unshift**: Add/remove elements at the start of the array (O(N) since indices must be recalculated).
* **slice(start, end)**: Returns a shallow copy of a portion of the array without modifying it.
* **splice(start, count, items)**: Modifies the array in-place by removing or adding elements.
* **map/filter/reduce**:
  * `map` transforms each element.
  * `filter` selects elements that pass a test condition.
  * `reduce` aggregates elements into a single accumulator value.

### 7. Objects & Classes
* **Dot notation**: Used when property names are known (`obj.name`).
* **Bracket notation**: Used for dynamic property lookups using variables (`obj[key]`).
* **ES6 Classes**: Act as syntactic sugar wrappers over legacy prototype chains, offering constructor methods and inheritance via `extends` and `super()`.

### 8. Asynchronous JavaScript
* **Promises**: Encapsulate an asynchronous operation, moving through states: `Pending`, `Resolved`, or `Rejected`.
* **Async/Await**: Syntactic sugar for handling promises linearly without deep nested then/catch chains.

---

## 🚫 The Mistakes Log (Developer Gotchas)

### 1. Loop variable leakage
* **Gotcha**: Using `var` in loop headers leaks the loop index out to the parent scope, causing async callbacks inside the loop to reference the final incremented value.
* **Fix**: Use `let` to isolate each loop iteration context.

### 2. Modifying reference variables
* **Gotcha**: Copying objects via `let obj2 = obj1` only duplicates the reference pointer, meaning edits on `obj2` mutate `obj1`.
* **Fix**: Use the spread operator `{ ...obj1 }` or deep copy methods like `JSON.parse(JSON.stringify(obj1))`.

### 3. Loss of 'this' context in callback handlers
* **Gotcha**: Passing an object method as a callback (e.g. inside `setTimeout`) changes the execution context, causing `this` to resolve to `window` or `undefined`.
* **Fix**: Bind the function explicitly using `.bind()` or use lexical arrow functions.

### 4. Forgetting switch cases break statements
* **Gotcha**: Omitting `break;` causes the switch to execute all subsequent cases regardless of matches.
* **Fix**: Always end cases with a `break;` unless fall-through is explicitly intended.
