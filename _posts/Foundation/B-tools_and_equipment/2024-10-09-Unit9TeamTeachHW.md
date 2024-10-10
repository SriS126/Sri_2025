##  Introduction
- 9.1
In Java, object-oriented programming allows developers to structure programs as a collection of classes and objects. One key concept in OOP is inheritance, where a class (subclass) inherits properties and methods from another class (superclass). This allows code to be reused and models relationships between objects.
> Superclass:
A superclass in Java is a general class that contains common fields and methods that can be shared by its subclasses. It is also sometimes referred to as a parent class.
> Subclass:
A subclass (or child class) is a class that extends the functionality of a superclass. A subclass inherits all the attributes and methods of the superclass and can also have its own additional properties and methods.
You might be wondering why are subclasses and super classes useful? Well, let's take a look at an example.
## Shapes
What if we wanted to solve the problem of managing different types of shapes, each with unique properties and behaviors, but still wanted to avoid repetitive code? Well, let's plan out a solution using inheritance.  By creating a general Shape class with shared attributes, and then extending it into specific subclasses like Rectangle and Triangle, we can reuse common logic while allowing each shape to override methods like calc_area() for their specific needs. This approach simplifies the design.
## How are we setting this up?
Let's think about attributes that all shapes have. For simplicity, we can think of `name`, `length`, and `width` as attributes of a shape.
Let's start setting up our main class. Here, we have a default and parametrized constructor. People can create a default shape, or pass in values to characterize their own shape.
We can also add additional methods to calculate area/print a shape.
```java
public class Shape {
    protected String name;
    private int length;
    private int width;
    // Default constructor
    public Shape() {
        this.name = "Shape";
        this.length = 10;
        this.width = 5;
    }
    // Parameterized constructor
    public Shape(String name, int length, int width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }
}
```
Let's add setters (to set variables) and getters (to get a shapes attributes like name, length, and width.)
```java
public class Shape {
    protected String name;
    private int length;
    private int width;
    // Default constructor
    public Shape() {
        this.name = "Shape";
        this.length = 10;
        this.width = 5;
    }
    // Parameterized constructor
    public Shape(String name, int length, int width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }
    // Getter methods
    public String get_name() {
        return this.name;
    }
    public int get_length() {
        return this.length;
    }
    public int get_width() {
        return this.width;
    }
    // Setter methods
    public void set_name(String n) {
        this.name = n;
    }
    public void set_length(int a) {
        this.length = a;
    }
    public void set_width(int b) {
        this.width = b;
    }
}
```
Now we can have two subclasses, Rectangle and Triangle.
<img width="519" alt="Screenshot 2024-09-18 at 12 04 51 PM" src="https://github.com/user-attachments/assets/2e8eeed2-3f97-48be-9b5d-e52d2b07d355">
```java
public class Rectangle extends Shape {
    public Rectangle() {
        super();
    }
    public Rectangle(String name, int length, int width) {
        super(name, length, width);
    }
}
public class Triangle extends Shape {
    public Triangle() {
        super();
    }
    public Triangle(String name, int length, int width) {
        super(name, length, width);
    }
}
```
You might notice the `super()` keyword being used a lot here. But what does it mean?
This leads us to our next big idea.
> 9.2 Constructors for Subclasses
-  Writing a Constructor for Subclass:
When a subclass is created, it inherits the fields and methods from its superclass. However, a subclass does not inherit constructors from the superclass. If a subclass needs to initialize its own fields in addition to the fields of the superclass, it must provide its own constructor and explicitly call the constructor of the superclass using super().
- Understanding super():
When writing a constructor for a subclass, you often need to call the constructor of the superclass to initialize the fields inherited from it. The super() call must be the first statement in the subclass constructor.
If the superclass constructor requires arguments, those arguments must be passed in the super() call.
Obviously, the  code blocks above are pretty basic and have  a lot to be improved. For example, what if we wanted to model more complex shapes, like a circle or a hexagon? How could we extend our current Shape class to do that?
# Popcorn Hack
Here’s a challenge for you: Implement two new subclasses, Circle and Hexagon, extending from the Shape class.  Follow the same structure as the Rectangle and Triangle classes!
<img width="899" alt="Screenshot 2024-09-18 at 12 21 38 PM" src="https://github.com/user-attachments/assets/16926722-06a8-4489-a7c0-05dc921644c3">
```java
/* Your code goes in here. Copy paste the code cell above  and your new implementations here */
```
You might notice the `super()` keyword being used a lot. But what does it mean?
This leads us to our next lesson.
> 9.2 Constructors for Subclasses
-  Writing a Constructor for Subclass:
When a subclass is created, it inherits the fields and methods from its superclass. However, a subclass does not inherit constructors from the superclass. If a subclass needs to initialize its own fields in addition to the fields of the superclass, it must provide its own constructor and explicitly call the constructor of the superclass using super().
- Understanding super():
When writing a constructor for a subclass, you often need to call the constructor of the superclass to initialize the fields inherited from it. The super() call must be the first statement in the subclass constructor.
If the superclass constructor requires arguments, those arguments must be passed in the super() call.
# Popcorn Hack 2 Optional: Mastering super()
What if we wanted to understand how to properly use the super() keyword in subclasses to ensure that our shapes are correctly initialized?
Here’s a fun challenge:
1. Create a new subclass called Ellipse that extends Shape.
Constructor: Implement a constructor for Ellipse that accepts parameters for name, length, and width. This constructor should call the superclass constructor using super().
2. Update Your Driver Code
Test the Ellipse: Instantiate an Ellipse object and print its area. Verify that the constructor correctly initializes the shape and that the super() keyword is used properly.
Hints:
Ellipse Constructor: Use super(name, length, width) to initialize inherited fields.
Check Order: Remember, super() must be the first statement in your subclass constructor.
# Full Running Code Cell
```java
public class Shape {
    protected String name;
    private int length;
    private int width;
    // Default constructor
    public Shape() {
        this.name = "Shape";
        this.length = 10;
        this.width = 5;
    }
    // Parameterized constructor
    public Shape(String name, int length, int width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }
    // Getter methods
    public String get_name() {
        return this.name;
    }
    public int get_length() {
        return this.length;
    }
    public int get_width() {
        return this.width;
    }
    // Setter methods
    public void set_name(String n) {
        this.name = n;
    }
    public void set_length(int a) {
        this.length = a;
    }
    public void set_width(int b) {
        this.width = b;
    }
    // Method to calculate the area
    public double calc_area() {
        return this.length * this.width;
    }
    // Method to print the shape
    public void print_shape() {
        System.out.println("Shape: " + this.name);
    }
    // Additional method to print something
    public void print_something() {
        System.out.println("This is a shape");
    }
}
public class Rectangle extends Shape {
    public Rectangle() {
        super();
    }
    public Rectangle(String name, int length, int width) {
        super(name, length, width);
    }
    @Override
    public double calc_area() {
        return (this.get_length() * this.get_width());
    }
    @Override
    public void print_something() {
        System.out.println("This is a rectangle");
    }
}
public class Triangle extends Shape {
    public Triangle() {
        super();
    }
    public Triangle(String name, int length, int width) {
        super(name, length, width);
    }
    @Override
    public double calc_area() {
        return (get_length() * get_width() * 0.5);
    }
}
public class Driver {
    public static void main(String[] args) {
        Shape s1 = new Shape();
        Shape s2 = new Rectangle("rectangle", 4, 10);
        Shape s3 = new Triangle("triangle", 5, 20);
        System.out.println("Area of s1 = " + s1.calc_area());
        System.out.println("Area of s2 = " + s2.calc_area());
        System.out.println("Area of s3 = " + s3.calc_area());
        s1.print_shape();
        s2.print_shape();
        // Using the overridden method
        s1.print_something();
        s2.print_something();
    }
}
// Run the driver code
Driver.main(new String[0]);
```
    Area of s1 = 50.0
    Area of s2 = 40.0
    Area of s3 = 50.0
    Shape: Shape
    Shape: rectangle
    This is a shape
    This is a rectangle