# Team Teach Table

#### Click and Unclick on the Buttons you want to review/reflect upon!

<div class="table-container">
    <div class="button-grid">
        <div class="button-container">
            <button class="button" onclick="toggleContent('keyTakeaways')">Key Takeaways</button>
        </div>
        <div class="vertical-separator"></div> <!-- Vertical line between the buttons -->
        <div class="button-container">
            <button class="button" onclick="toggleContent('reflection')">Reflection</button>
        </div>
        <div class="line-separator"></div> <!-- Horizontal line between rows -->
        <div class="button-container">
            <button class="button" onclick="toggleContent('notes')">Notes</button>
        </div>
        <div class="vertical-separator"></div> <!-- Vertical line between the buttons -->
        <div class="button-container">
            <button class="button" onclick="toggleContent('blog')">Blog</button> <!-- Renamed to Blog -->
        </div>
    </div>
</div>

<div id="keyTakeaways" class="content">
    <h3>Unit 1:</h3>
    <ul>
        <li>I learned that in Java, dividing two integers results in truncation, which means the decimal part is discarded. For example, <code>5 / 2</code> yields <code>2</code>.</li>
        <li>I discovered that primitive types (like <code>int</code>, <code>double</code>, and <code>char</code>) store simple values in stack memory, while reference types (like objects and arrays) refer to memory addresses and are stored in heap memory.</li>
        <li>I realized the difference between instance variables and static variables in classes, including how static variables are shared among all instances and stored in the stack.</li>
        <li>I understood how to create and use classes in Java, including defining constructors to initialize object properties, and methods for operations like calculating interest.</li>
        <li>I learned about memory management in Java, specifically how primitive types and reference types are allocated in stack and heap memory, respectively.</li>
    </ul>

    <h3>Unit 2:</h3>
    <ul>
        <li>Strings in Java can be created using string literals, the <code>new</code> keyword, or by referencing existing strings. Strings are immutable, meaning any modification results in a new string object being created.</li>
        <li>Strings can be concatenated using the <code>+</code> operator or the <code>+=</code> operator, allowing the combination of multiple string values into a single string.</li>
        <li>Backslashes (<code>\</code>) are used to create escape sequences, allowing special characters (like quotes and new lines) to be included in strings. Forward slashes (<code>/</code>) are generally used for comments or division operations.</li>
        <li>Java provides wrapper classes (e.g., <code>Integer</code>, <code>Double</code>) to convert primitive data types into objects. This is essential for using collections and other object-oriented features.</li>
        <li>Java automatically converts primitive types to their corresponding wrapper objects (autoboxing) and vice versa (unboxing), streamlining operations involving primitive and reference types.</li>
    </ul>

    <h3>Unit 3:</h3>
    <ul>
        <li>Boolean expressions evaluate to <code>true</code> or <code>false</code> and are typically used in control flow statements such as <code>if</code>, <code>while</code>, and <code>for</code>.</li>
        <li>The <code>if</code> statement allows for conditional execution of code blocks. If the condition is <code>true</code>, the associated block executes; otherwise, it is skipped.</li>
        <li>Java supports <code>if-else</code> statements, which provide an alternative block of code to execute when the initial condition evaluates to <code>false</code>.</li>
        <li>Nesting of <code>if</code> statements is possible, allowing for multiple conditions to be checked in sequence, providing complex decision-making capabilities.</li>
        <li>Logical operators like <code>&&</code> (AND), <code>||</code> (OR), and <code>!</code> (NOT) can be used to combine or invert boolean expressions for more complex conditions.</li>
    </ul>

    <h3>Unit 4:</h3>
    <ul>
        <li>Iteration in Java is commonly achieved using loops, including <code>for</code>, <code>while</code>, and <code>do-while</code> loops, allowing for repetitive execution of code blocks.</li>
        <li>The <code>for</code> loop is particularly useful for iterating a specific number of times, often used with a counter variable.</li>
        <li>The <code>while</code> loop continues executing as long as its condition remains <code>true</code>, making it suitable for situations where the number of iterations is not known beforehand.</li>
        <li>The <code>do-while</code> loop ensures that the code block is executed at least once before checking the condition, as the condition is evaluated after the block executes.</li>
        <li>Enhancing loops, like the enhanced <code>for</code> loop (or for-each loop), simplify iteration over arrays and collections.</li>
    </ul>

    <h3>Unit 5:</h3>
    <ul>
        <li>Writing classes in Java involves defining properties (attributes) and methods (functions) that encapsulate the behavior and state of objects.</li>
        <li>Constructors are special methods used to create and initialize objects, allowing for setting initial values for instance variables.</li>
        <li>Access modifiers (like <code>private</code>, <code>public</code>, and <code>protected</code>) control the visibility and accessibility of class members, promoting encapsulation and data hiding.</li>
        <li>Method overloading allows multiple methods with the same name to exist in a class, differentiated by their parameter types or counts.</li>
        <li>Java supports the concept of static methods and variables, which belong to the class itself rather than any specific instance, allowing for utility functions that do not require object instantiation.</li>
    </ul>

    <h3>Unit 6:</h3>
    <ul>
        <li>Arrays in Java are fixed-size data structures that hold multiple values of the same type, allowing for efficient data storage and access.</li>
        <li>Array indexing starts at 0, meaning the first element is accessed with index 0, the second with index 1, and so on.</li>
        <li>Arrays can be single-dimensional or multi-dimensional, with multi-dimensional arrays often used to represent matrices or grids.</li>
        <li>Initialization of arrays can be done at the time of declaration or later through individual assignments or loops.</li>
        <li>Java provides methods for array manipulation, including length retrieval and iteration using loops or enhanced for loops.</li>
    </ul>

    <h3>Unit 7:</h3>
    <ul>
        <li>ArrayLists in Java are dynamic data structures that can grow and shrink in size, providing more flexibility than arrays.</li>
        <li>ArrayLists store objects and can only hold reference types, meaning primitive types must be wrapped in their corresponding wrapper classes.</li>
        <li>Common methods for ArrayLists include <code>add()</code> to append elements, <code>get()</code> to access elements, and <code>remove()</code> to delete elements.</li>
        <li>ArrayLists can be iterated over using loops, including the enhanced for loop, making them convenient for collection manipulation.</li>
        <li>ArrayLists can be converted back to arrays if needed, allowing for interoperability between these data structures.</li>
    </ul>

    <h3>Unit 8:</h3>
    <ul>
        <li>Two-dimensional arrays (2D arrays) in Java are arrays of arrays, allowing for the representation of data in a matrix format.</li>
        <li>2D arrays are declared with two sets of brackets, and indexing requires two indices: one for the row and one for the column.</li>
        <li>Initialization can be done with nested curly braces, where each inner brace represents a row in the array.</li>
        <li>Accessing and modifying elements in a 2D array involves specifying both the row and column indices.</li>
        <li>Iteration through 2D arrays often uses nested loops, allowing for traversing both dimensions efficiently.</li>
    </ul>

    <h3>Unit 9:</h3>
    <ul>
        <li>Inheritance in Java allows one class (subclass) to inherit fields and methods from another class (superclass), promoting code reuse.</li>
        <li>Subclassing is achieved using the <code>extends</code> keyword, allowing the subclass to access protected and public members of the superclass.</li>
        <li>Method overriding enables a subclass to provide a specific implementation of a method already defined in its superclass, allowing for polymorphism.</li>
        <li>Java supports the concept of constructors in subclasses, which can call the superclass constructor using the <code>super</code> keyword to initialize inherited properties.</li>
        <li>Interfaces in Java define a contract of methods that implementing classes must fulfill, allowing for a form of multiple inheritance.</li>
    </ul>
</div>



<div id="reflection" class="content">
    <p>These team teaches were really good as I got to learn a lot more about Java. My favorite unit was learning about inheritance. This unit was particularly exciting because it introduced me to the concept of class hierarchies and how subclasses can inherit properties and methods from superclasses. I found it fascinating how this feature promotes code reuse and allows for more organized programming. Understanding polymorphism also helped me appreciate how Java enables different objects to be treated through a common interface, making my code more flexible and efficient.</p>
    <p>Some areas I could have improved upon include making my content more dynamic, interactive, and creative, as well as teaching a bit faster.</p>
</div>



<div id="notes" class="content">
    <p>Notes: Here are your important notes...</p>
    <h3>Unit 1: Primitive Types</h3>
    <h4>Data Types</h4>
    <ul>
        <li><code>int</code></li>
        <li><code>double</code></li>
        <li><code>boolean</code></li>
        <li><code>char</code></li>
    </ul>
    <h4>Variable Declaration</h4>
    <ul>
        <li>Declaring a variable: <code>type variableName = value;</code></li>
    </ul>
    <h4>Arithmetic Operations</h4>
    <ul>
        <li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
        <li><strong>Precedence rules</strong>: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction (PEMDAS)</li>
    </ul>
    <h4>Casting</h4>
    <ul>
        <li>Converting <code>int</code> to <code>double</code></li>
        <li>Converting <code>double</code> to <code>int</code> (truncation occurs)</li>
    </ul>
    <h4>Input</h4>
    <ul>
        <li>Use <code>Scanner</code> class for input</li>
    </ul>
    <h4>Output</h4>
    <ul>
        <li>Use <code>System.out.println()</code> for output</li>
    </ul>

    <h3>Unit 2: Using Objects</h3>
    <h4>Objects</h4>
    <ul>
        <li>Created with the <code>new</code> keyword.</li>
    </ul>
    <h4>Strings</h4>
    <ul>
        <li><code>String</code> type is used for text.</li>
    </ul>
    <h4>Methods</h4>
    <ul>
        <li>Common methods include:
            <ul>
                <li><code>length()</code></li>
                <li><code>substring()</code></li>
                <li><code>indexOf()</code></li>
                <li><code>charAt()</code></li>
            </ul>
        </li>
    </ul>
    <h4>Null References</h4>
    <ul>
        <li><code>null</code> indicates that a reference does not point to any object.</li>
    </ul>
    <h4>Equality</h4>
    <ul>
        <li>Use <code>==</code> for reference equality.</li>
        <li>Use <code>.equals()</code> for content equality.</li>
    </ul>
    <h4>Math Class</h4>
    <ul>
        <li>Commonly used methods:
            <ul>
                <li><code>Math.pow()</code></li>
                <li><code>Math.sqrt()</code></li>
                <li><code>Math.random()</code></li>
            </ul>
        </li>
    </ul>

    <h3>Unit 3: Boolean Expressions and if Statements</h3>
    <h4>Boolean Operators</h4>
    <ul>
        <li><code>&&</code> (AND)</li>
        <li><code>||</code> (OR)</li>
        <li><code>!</code> (NOT)</li>
    </ul>
    <h4>Comparison Operators</h4>
    <ul>
        <li><code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>==</code>, <code>!=</code></li>
    </ul>
    <h4>If Statements</h4>
    <ul>
        <li>Basic structure:
            <ul>
                <li><code>if</code></li>
                <li><code>else if</code></li>
                <li><code>else</code></li>
            </ul>
        </li>
    </ul>
    <h4>Nesting</h4>
    <ul>
        <li>Placing conditions inside other conditions.</li>
    </ul>
    <h4>Logical Expressions</h4>
    <ul>
        <li>Combine multiple conditions for more complex checks.</li>
    </ul>

    <h3>Unit 4: Iteration</h3>
    <h4>Loops</h4>
    <ul>
        <li><code>while(condition) { }</code></li>
        <li><code>for(initialization; condition; update) { }</code></li>
        <li><code>do { } while(condition);</code></li>
    </ul>
    <h4>Break/Continue</h4>
    <ul>
        <li><code>break</code> exits the loop.</li>
        <li><code>continue</code> skips the current iteration.</li>
    </ul>
    <h4>Nested Loops</h4>
    <ul>
        <li>A loop inside another loop.</li>
    </ul>
    <h4>Loop Applications</h4>
    <ul>
        <li>Traversing arrays, searching, counting.</li>
    </ul>

    <h3>Unit 5: Writing Classes</h3>
    <h4>Class Anatomy</h4>
    <ul>
        <li>Fields, methods, constructors.</li>
    </ul>
    <h4>Constructor</h4>
    <ul>
        <li>Initializes object state.</li>
    </ul>
    <h4>Accessors (Getters)</h4>
    <ul>
        <li>Return field value.</li>
    </ul>
    <h4>Mutators (Setters)</h4>
    <ul>
        <li>Modify field value.</li>
    </ul>
    <h4>Static Members</h4>
    <ul>
        <li>Shared across all instances.</li>
    </ul>
    <h4>Encapsulation</h4>
    <ul>
        <li>Use private fields and public methods.</li>
    </ul>

    <h3>Unit 6: Array</h3>
    <h4>Declaration</h4>
    <ul>
        <li><code>type[] arrayName = new type[size];</code></li>
    </ul>
    <h4>Access Elements</h4>
    <ul>
        <li><code>array[index]</code></li>
    </ul>
    <h4>Iteration</h4>
    <ul>
        <li>Use loops to traverse arrays.</li>
    </ul>
    <h4>Common Operations</h4>
    <ul>
        <li>Finding max/min, sum, average.</li>
    </ul>
    <h4>Bounds Checking</h4>
    <ul>
        <li>Avoid <code>ArrayIndexOutOfBoundsException</code>.</li>
    </ul>

    <h3>Unit 7: ArrayList</h3>
    <h4>ArrayList Declaration</h4>
    <ul>
        <li><code>ArrayList<type> list = new ArrayList<>();</code></li>
    </ul>
    <h4>Methods</h4>
    <ul>
        <li>Common methods include:
            <ul>
                <li><code>add()</code></li>
                <li><code>remove()</code></li>
                <li><code>set()</code></li>
                <li><code>get()</code></li>
                <li><code>size()</code></li>
            </ul>
        </li>
    </ul>
    <h4>Dynamic Resizing</h4>
    <ul>
        <li>Can grow or shrink as needed.</li>
    </ul>
    <h4>Iteration</h4>
    <ul>
        <li>For-each or standard for loop.</li>
    </ul>
    <h4>Autoboxing/Unboxing</h4>
    <ul>
        <li>Convert between primitives and wrapper objects.</li>
    </ul>

    <h3>Unit 8: 2D Arrays</h3>
    <h4>Declaration</h4>
    <ul>
        <li><code>type[][] arrayName = new type[rows][cols];</code></li>
    </ul>
    <h4>Access Elements</h4>
    <ul>
        <li><code>array[row][col]</code></li>
    </ul>
    <h4>Iteration</h4>
    <ul>
        <li>Use nested loops for row-column traversal.</li>
    </ul>
    <h4>Applications</h4>
    <ul>
        <li>Grids, matrices.</li>
    </ul>
    <h4>Common Algorithms</h4>
    <ul>
        <li>Row-wise, column-wise processing.</li>
    </ul>

    <h3>Unit 9: Inheritance</h3>
    <h4>Inheritance</h4>
    <ul>
        <li><code>class Subclass extends Superclass</code></li>
    </ul>
    <h4>Subclass</h4>
    <ul>
        <li>Inherits fields/methods from superclass.</li>
    </ul>
    <h4>Method Overriding</h4>
    <ul>
        <li>Redefine superclass method in subclass.</li>
    </ul>
    <h4>Super Keyword</h4>
    <ul>
        <li>Call superclass constructor/method.</li>
    </ul>
    <h4>Polymorphism</h4>
    <ul>
        <li>Use superclass reference for subclass object.</li>
    </ul>
    <h4>Object Class</h4>
    <ul>
        <li>All classes inherit from <code>Object</code>.</li>
    </ul>
</div>

<div id="blog" class="content"> <!-- Blog content section -->
    <h3>Blog</h3>
    <p>Check out my latest blog post: <a href="https://sris126.github.io/Sri_2025/2024/10/09/TeamTeachReflection.html" target="_blank">Team Teach Reflection</a></p>
</div>

<script>
    function toggleContent(id) {
        var content = document.getElementById(id);
        content.style.display = (content.style.display === "block") ? "none" : "block";
    }
</script>

<style>
    /* Move the grid downward */
    .table-container {
        margin-top: 50px;
        padding: 20px;
        border: 3px solid #ccc;
        border-radius: 15px;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        background-color: #001f3f; /* Dark blue background */
    }

    /* Layout for 2x2 grid with proper spacing */
    .button-grid {
        display: grid;
        grid-template-columns: 1fr 10px 1fr;
        gap: 30px;
        margin-bottom: 20px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        position: relative;
    }

    /* Horizontal line (divider) between the two rows of buttons */
    .line-separator {
        grid-column: span 3;
        border-bottom: 2px solid #ccc;
        margin: 20px 0;
    }

    /* Vertical line (divider) between the buttons in each row */
    .vertical-separator {
        width: 2px;
        background-color: #ccc;
        height: 100%;
    }

    /* Styling for the buttons */
    .button {
        width: 200px;
        height: 60px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        position: relative;
    }

    /* Glowing effect on hover */
    .button:hover {
        background-color: #0056b3;
        box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        transform: translateY(-3px);
    }

    /* Content styling (hidden by default) */
    .content {
        display: none;
        margin-top: 10px;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: ##000000;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    /* Button hover transition and glowing effect */
    .button::before {
        content: '';
        position: absolute;
        top: -8px;
        right: -8px;
        bottom: -8px;
        left: -8px;
        background: rgba(0, 123, 255, 0.3);
        border-radius: 20px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .button:hover::before {
        opacity: 1;
    }
</style>
