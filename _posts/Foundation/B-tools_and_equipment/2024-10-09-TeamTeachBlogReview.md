# Unit 1: Primitive Types

### Data Types
- `int`
- `double`
- `boolean`
- `char`

### Variable Declaration
- Declaring a variable: `type variableName = value;`

### Arithmetic Operations
- `+`, `-`, `*`, `/`, `%`
- **Precedence rules**: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction (PEMDAS)

### Casting
- Converting `int` to `double`
- Converting `double` to `int` (truncation occurs)

### Input
- Use `Scanner` class for input

### Output
- Use `System.out.println()` for output

# Unit 2: Using Objects

### Objects
- Created with the `new` keyword.

### Strings
- `String` type is used for text.

### Methods
- Common methods include:
  - `length()`
  - `substring()`
  - `indexOf()`
  - `charAt()`

### Null References
- `null` indicates that a reference does not point to any object.

### Equality
- Use `==` for reference equality.
- Use `.equals()` for content equality.

### Math Class
- Commonly used methods:
  - `Math.pow()`
  - `Math.sqrt()`
  - `Math.random()`

# Unit 3: Boolean Expressions and if Statements

### Boolean Operators
- `&&` (AND)
- `||` (OR)
- `!` (NOT)

### Comparison Operators
- `<`, `>`, `<=`, `>=`, `==`, `!=`

### If Statements
- Basic structure:
  - `if`
  - `else if`
  - `else`

### Nesting
- Placing conditions inside other conditions.

### Logical Expressions
- Combine multiple conditions for more complex checks.


# Unit 4: Iteration

### Loops
- `while(condition) { }`
- `for(initialization; condition; update) { }`
- `do { } while(condition);`

### Break/Continue
- `break` exits the loop.
- `continue` skips the current iteration.

### Nested Loops
- A loop inside another loop.

### Loop Applications
- Traversing arrays, searching, counting.


# Unit 5: Writing Classes

### Class Anatomy
- Fields, methods, constructors.

### Constructor
- Initializes object state.

### Accessors (Getters)
- Return field value.

### Mutators (Setters)
- Modify field value.

### Static Members
- Shared across all instances.

### Encapsulation
- Use private fields and public methods.


# Unit 6: Array

### Declaration
- `type[] arrayName = new type[size];`

### Access Elements
- `array[index]`

### Iteration
- Use loops to traverse arrays.

### Common Operations
- Finding max/min, sum, average.

### Bounds Checking
- Avoid `ArrayIndexOutOfBoundsException`.


# Unit 7: ArrayList

### ArrayList Declaration
- `ArrayList<type> list = new ArrayList<>();`

### Methods
- Common methods include:
  - `add()`
  - `remove()`
  - `set()`
  - `get()`
  - `size()`

### Dynamic Resizing
- Can grow or shrink as needed.

### Iteration
- For-each or standard for loop.

### Autoboxing/Unboxing
- Convert between primitives and wrapper objects.


# Unit 8: 2D Arrays

### Declaration
- `type[][] arrayName = new type[rows][cols];`

### Access Elements
- `array[row][col]`

### Iteration
- Use nested loops for row-column traversal.

### Applications
- Grids, matrices.

### Common Algorithms
- Row-wise, column-wise processing.


# Unit 9: Inheritance

### Inheritance
- `class Subclass extends Superclass`

### Subclass
- Inherits fields/methods from superclass.

### Method Overriding
- Redefine superclass method in subclass.

### Super Keyword
- Call superclass constructor/method.

### Polymorphism
- Use superclass reference for subclass object.

### Object Class
- All classes inherit from `Object`.
