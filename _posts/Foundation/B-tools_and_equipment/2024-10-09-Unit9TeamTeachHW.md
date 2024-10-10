# Unit 9 HW


```Java
abstract class Shape {
    protected String name;
    protected double length;
    protected double width;

    public Shape(String name, double length, double width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }

    public void showName() {
        System.out.println("Shape: " + name);
    }

    public abstract double calculateArea();
    public abstract void describeShape();
}

class Rectangle extends Shape {
    public Rectangle(double length, double width) {
        super("Rectangle", length, width);
    }

    @Override
    public double calculateArea() {
        return length * width;
    }

    @Override
    public void describeShape() {
        System.out.println("I am a rectangle with parallel opposite sides.");
    }
}

class Triangle extends Shape {
    public Triangle(double base, double height) {
        super("Triangle", base, height);
    }

    @Override
    public double calculateArea() {
        return 0.5 * length * width;
    }

    @Override
    public void describeShape() {
        System.out.println("I have three sides and my shape is a triangle.");
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        super("Circle", radius, 0);  // width isn't used in Circle
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * Math.pow(radius, 2);
    }

    @Override
    public void describeShape() {
        System.out.println("I am a circle, perfectly round with no edges.");
    }
}

class Hexagon extends Shape {
    private double sideLength;

    public Hexagon(double sideLength) {
        super("Hexagon", sideLength, 0);  // width isn't used in Hexagon
        this.sideLength = sideLength;
    }

    @Override
    public double calculateArea() {
        return (3 * Math.sqrt(3) * Math.pow(sideLength, 2)) / 2;
    }

    @Override
    public void describeShape() {
        System.out.println("I am a hexagon with six equally long sides.");
    }
}

class Ellipse extends Shape {
    public Ellipse(double majorRadius, double minorRadius) {
        super("Ellipse", majorRadius, minorRadius);
    }

    @Override
    public double calculateArea() {
        return Math.PI * length * width;
    }

    @Override
    public void describeShape() {
        System.out.println("I am an ellipse with two distinct radii.");
    }
}

public class ShapeDemo {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Triangle(5, 10),
            new Rectangle(4, 7),
            new Circle(3),
            new Hexagon(6),
            new Ellipse(4, 2)
        };

        for (Shape shape : shapes) {
            shape.showName();
            System.out.printf("Area: %.2f\n", shape.calculateArea());
            shape.describeShape();
            System.out.println();
        }
    }
}

ShapeDemo.main(null);

```

    Shape: Triangle
    Area: 25.00
    I have three sides and my shape is a triangle.
    
    Shape: Rectangle
    Area: 28.00
    I am a rectangle with parallel opposite sides.
    
    Shape: Circle
    Area: 28.27
    I am a circle, perfectly round with no edges.
    
    Shape: Hexagon
    Area: 93.53
    I am a hexagon with six equally long sides.
    
    Shape: Ellipse
    Area: 25.13
    I am an ellipse with two distinct radii.
    


9.1


```Java
// Abstract Shape class as the base class
abstract class Shape {
    String shapeName;

    // Constructor to set the name of the shape
    Shape(String shapeName) {
        this.shapeName = shapeName;
    }

    // Abstract method to compute the area of the shape
    abstract double calculateArea();

    // Abstract method to print unique information about the shape
    abstract void printDetails();
}

// Circle class that extends Shape
class Circle extends Shape {
    double radius;

    // Constructor that initializes the circle's name and radius
    Circle(String shapeName, double radius) {
        super(shapeName);
        this.radius = radius;
    }

    // Overriding the method to calculate the area of a circle
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }

    // Overriding the method to print circle-specific details
    @Override
    void printDetails() {
        System.out.println("This circle has a radius of: " + radius);
    }
}

// Hexagon class that extends Shape
class Hexagon extends Shape {
    double sideLength;

    // Constructor to initialize the hexagon's name and side length
    Hexagon(String shapeName, double sideLength) {
        super(shapeName);
        this.sideLength = sideLength;
    }

    // Overriding the method to compute the area of a hexagon
    @Override
    double calculateArea() {
        return (3 * Math.sqrt(3) / 2) * sideLength * sideLength;
    }

    // Overriding the method to print hexagon-specific details
    @Override
    void printDetails() {
        System.out.println("This hexagon has side length: " + sideLength);
    }
}

// Ellipse class that extends Shape
class Ellipse extends Shape {
    double majorAxis, minorAxis;

    // Constructor to initialize the ellipse's name and its axes lengths
    Ellipse(String shapeName, double majorAxis, double minorAxis) {
        super(shapeName);
        this.majorAxis = majorAxis;
        this.minorAxis = minorAxis;
    }

    // Overriding the method to calculate the area of an ellipse
    @Override
    double calculateArea() {
        return Math.PI * (majorAxis / 2) * (minorAxis / 2);
    }

    // Overriding the method to print ellipse-specific details
    @Override
    void printDetails() {
        System.out.println("This ellipse has a major axis of: " + majorAxis + " and a minor axis of: " + minorAxis);
    }
}

// Main class to run the program
public class ShapeDemo {
    public static void main(String[] args) {
        // Instantiate the shapes: Circle, Hexagon, and Ellipse
        Shape circle = new Circle("Circle", 5);
        Shape hexagon = new Hexagon("Hexagon", 4);
        Shape ellipse = new Ellipse("Ellipse", 6, 4);

        // Calculate and print the areas and unique details of each shape
        System.out.println("Area of Circle: " + circle.calculateArea());
        circle.printDetails();

        System.out.println("Area of Hexagon: " + hexagon.calculateArea());
        hexagon.printDetails();

        System.out.println("Area of Ellipse: " + ellipse.calculateArea());
        ellipse.printDetails();
    }
}

ShapeDemo.main(null);

```

    Area of Circle: 78.53981633974483
    This circle has a radius of: 5.0
    Area of Hexagon: 41.569219381653056
    This hexagon has side length: 4.0
    Area of Ellipse: 18.84955592153876
    This ellipse has a major axis of: 6.0 and a minor axis of: 4.0



```Java
// Abstract base class for all shapes
abstract class Shape {
    protected String shapeName;
    protected double length;
    protected double width;

    // Constructor for the Shape class
    public Shape(String shapeName, double length, double width) {
        this.shapeName = shapeName;
        this.length = length;
        this.width = width;
    }

    // Method to display the name of the shape
    public void showShapeName() {
        System.out.println("This shape is a " + shapeName + ".");
    }

    // Abstract method to calculate the area, to be defined by subclasses
    abstract double calculateArea();

    // Abstract method to print unique information about the shape
    abstract void printDetails();
}

// Ellipse class extending Shape
class Ellipse extends Shape {
    
    // Constructor for Ellipse that invokes the superclass constructor
    public Ellipse(String shapeName, double length, double width) {
        super(shapeName, length, width);
    }

    // Implementing the area method using the formula for an ellipse
    @Override
    public double calculateArea() {
        return Math.PI * length * width;
    }

    @Override
    public void printDetails() {
        System.out.println("I am an ellipse, which can be described as a stretched circle.");
    }
}

// Main class for testing the implementation
public class ShapeDemo {
    public static void main(String[] args) {
        Ellipse ellipse = new Ellipse("Ellipse", 5, 3);
        ellipse.showShapeName();
        System.out.printf("Area: %.2f\n", ellipse.calculateArea());
        ellipse.printDetails();
    }
}

ShapeDemo.main(null);

```

    This shape is a Ellipse.
    Area: 47.12
    I am an ellipse, which can be described as a stretched circle.


9.3 Hacks


```Java
// Abstract class representing a generic shape
class Shape {
    protected String shapeName;

    // Constructor to initialize the shape's name
    public Shape(String shapeName) {
        this.shapeName = shapeName;
    }

    // Method to compute the perimeter (base method)
    double computePerimeter() {
        System.out.println("Calculating perimeter for a generic shape.");
        return 0;
    }

    // Method to print information about the shape
    void displayInfo() {
        System.out.println("This is a generic shape.");
    }
}

// Ellipse class that extends the Shape class
class Ellipse extends Shape {
    private double semiMajorAxis, semiMinorAxis;  // Semi-major and semi-minor axes

    // Constructor for the Ellipse class
    public Ellipse(double semiMajorAxis, double semiMinorAxis) {
        super("Ellipse");
        this.semiMajorAxis = semiMajorAxis;
        this.semiMinorAxis = semiMinorAxis;
    }

    // Override the computePerimeter method for Ellipse
    @Override
    double computePerimeter() {
        // Approximation for the perimeter of an Ellipse
        return Math.PI * (3 * (semiMajorAxis + semiMinorAxis) - 
                          Math.sqrt((3 * semiMajorAxis + semiMinorAxis) * 
                                     (semiMajorAxis + 3 * semiMinorAxis)));
    }

    // Override the displayInfo method for Ellipse
    @Override
    void displayInfo() {
        super.displayInfo();  // Invoke the parent class method
        System.out.println("This is an ellipse.");
    }
}

// Hexagon class that extends the Shape class
class Hexagon extends Shape {
    private double sideLength;

    // Constructor for the Hexagon class
    public Hexagon(double sideLength) {
        super("Hexagon");
        this.sideLength = sideLength;
    }

    // Override the computePerimeter method for Hexagon
    @Override
    double computePerimeter() {
        return 6 * sideLength;  // Perimeter formula for Hexagon
    }

    // Method to compute the area of the hexagon
    double computeArea() {
        // Area formula for a Hexagon
        return (3 * Math.sqrt(3) / 2) * Math.pow(sideLength, 2);
    }

    // Override the displayInfo method for Hexagon
    @Override
    void displayInfo() {
        super.displayInfo();  // Invoke the parent class method
        System.out.println("This is a hexagon.");
    }
}

// Main class for testing the shape functionality
public class ShapeDemo {
    public static void main(String[] args) {
        // Instantiate a Hexagon object
        Hexagon hexagon = new Hexagon(5);
        // Instantiate an Ellipse object
        Ellipse ellipse = new Ellipse(3, 4);

        // Calculate and display the perimeter and area of the hexagon
        System.out.println("Hexagon Perimeter: " + hexagon.computePerimeter());
        System.out.println("Hexagon Area: " + hexagon.computeArea());
        hexagon.displayInfo();

        // Calculate and display the perimeter of the ellipse
        System.out.println("Ellipse Perimeter: " + ellipse.computePerimeter());
        ellipse.displayInfo();
    }
}

ShapeDemo.main(null);

```

    Hexagon Perimeter: 30.0
    Hexagon Area: 64.9519052838329
    This is a generic shape.
    This is a hexagon.
    Ellipse Perimeter: 22.103491790916742
    This is a generic shape.
    This is an ellipse.


9.5 Hack


```Java
// Abstract class representing a geometric shape
abstract class Shape {
    protected String shapeName;

    // Constructor to initialize the shape's name
    protected Shape(String shapeName) {
        this.shapeName = shapeName;
    }

    // Abstract method to represent drawing the shape
    abstract String render();
}

// Triangle class that extends the Shape class
class Triangle extends Shape {
    // Constructor for the Triangle class
    public Triangle() {
        super("Triangle");
    }

    // Override the render method to provide triangle-specific behavior
    @Override
    String render() {
        return "Rendering a triangle.";
    }
}

// Main class to demonstrate the functionality of the Triangle class
public class ShapeDemo {
    public static void main(String[] args) {
        // Instantiate a Triangle object
        Triangle triangle = new Triangle();

        // Invoke the render method and print the output
        System.out.println(triangle.render());
    }
}

```


```Java
// Abstract class representing a geometric shape
abstract class Shape {
    protected String shapeName;

    // Constructor to initialize the shape's name
    protected Shape(String shapeName) {
        this.shapeName = shapeName;
    }

    // Abstract method to compute the area of the shape
    abstract double calculateArea();

    // Abstract method to represent the drawing of the shape
    abstract String render();
}

// Triangle class that extends the Shape class
class Triangle extends Shape {
    private double base;
    private double height;

    // Constructor for the Triangle class
    public Triangle(double base, double height) {
        super("Triangle");
        this.base = base;
        this.height = height;
    }

    // Override the calculateArea method to compute the area of the triangle
    @Override
    double calculateArea() {
        return 0.5 * base * height;
    }

    // Override the render method to indicate triangle drawing
    @Override
    String render() {
        return "Rendering a triangle.";
    }
}

// Rectangle class that extends the Shape class
class Rectangle extends Shape {
    private double length;
    private double width;

    // Constructor for the Rectangle class
    public Rectangle(double length, double width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }

    // Override the calculateArea method to compute the area of the rectangle
    @Override
    double calculateArea() {
        return length * width;
    }

    // Override the render method to indicate rectangle drawing
    @Override
    String render() {
        return "Rendering a rectangle.";
    }
}

// Circle class that extends the Shape class
class Circle extends Shape {
    private double radius;

    // Constructor for the Circle class
    public Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }

    // Override the calculateArea method to compute the area of the circle
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }

    // Override the render method to indicate circle drawing
    @Override
    String render() {
        return "Rendering a circle.";
    }
}

// Main class to test the shape implementations
public class ShapeDemo {
    public static void main(String[] args) {
        // Create instances of various shapes
        Shape triangle = new Triangle(5, 10);     // Triangle with a base of 5 and height of 10
        Shape rectangle = new Rectangle(4, 6);    // Rectangle with a length of 4 and width of 6
        Shape circle = new Circle(3);             // Circle with a radius of 3

        // Display the rendering information and area for each shape
        System.out.println(triangle.render());
        System.out.println("Area: " + triangle.calculateArea());

        System.out.println(rectangle.render());
        System.out.println("Area: " + rectangle.calculateArea());

        System.out.println(circle.render());
        System.out.println("Area: " + circle.calculateArea());
    }
}
ShapeDemo.main(null);

```

    Rendering a triangle.
    Area: 25.0
    Rendering a rectangle.
    Area: 24.0
    Rendering a circle.
    Area: 28.274333882308138


# 9.6 Hacks


```Java
// Abstract class representing a geometric shape
abstract class Shape {
    protected String shapeName;

    // Constructor to initialize the shape's name
    protected Shape(String shapeName) {
        this.shapeName = shapeName;
    }

    // Abstract method to calculate the area of the shape
    abstract double calculateArea();

    // Abstract method to represent the drawing of the shape
    abstract String render();
}

// Square class that extends the Shape class
class Square extends Shape {
    private double sideLength;

    // Constructor for the Square class
    public Square(double sideLength) {
        super("Square");
        this.sideLength = sideLength;
    }

    // Override the calculateArea method to compute the area of the square
    @Override
    double calculateArea() {
        return sideLength * sideLength;
    }

    // Override the render method to indicate square drawing
    @Override
    String render() {
        return "Rendering a square.";
    }

    // Method specific to the Square class
    void squareSpecificMethod() {
        System.out.println("This is a method specific to Square.");
    }
}

// Circle class that extends the Shape class
class Circle extends Shape {
    private double radius;

    // Constructor for the Circle class
    public Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }

    // Override the calculateArea method to compute the area of the circle
    @Override
    double calculateArea() {
        return Math.PI * radius * radius;
    }

    // Override the render method to indicate circle drawing
    @Override
    String render() {
        return "Rendering a circle.";
    }
}

// Main class to test the shape implementations
public class ShapeDemo {
    public static void main(String[] args) {
        // Demonstration of polymorphism
        Shape shape1 = new Square(4); // Creating a Square object
        Shape shape2 = new Circle(3);  // Creating a Circle object

        // Drawing and calculating areas of the shapes
        System.out.println(shape1.render());
        System.out.println("Area: " + shape1.calculateArea());

        System.out.println(shape2.render());
        System.out.println("Area: " + shape2.calculateArea());

        // Checking if shape1 is an instance of Square before casting
        if (shape1 instanceof Square) {
            Square square = (Square) shape1; // Safe cast
            square.squareSpecificMethod();    // Call the square-specific method
        }

        // Attempting to cast shape2 to Square, which will cause a ClassCastException
        try {
            Square incorrectCast = (Square) shape2; // Unsafe cast
            incorrectCast.squareSpecificMethod(); 
        } catch (ClassCastException e) {
            System.out.println("Cannot cast Circle to Square!");
        }
    }
}
ShapeDemo.main(null);

```

    Rendering a square.
    Area: 16.0
    Rendering a circle.
    Area: 28.274333882308138
    This is a method specific to Square.
    Cannot cast Circle to Square!


# 9.7 Hack


```Java
public class CustomObject {
    private String name;
    private int id;

    // Constructor to initialize CustomObject with name and id
    public CustomObject(String name, int id) {
        this.name = name;
        this.id = id;
    }

    // Override the toString method to provide a custom string representation of the object
    @Override
    public String toString() {
        return "CustomObject { " +
                "Name: '" + name + '\'' +
                ", ID: " + id +
                " }";
    }

    // Main method to test the CustomObject class
    public static void main(String[] args) {
        CustomObject obj = new CustomObject("SampleObject", 101);

        // Display the class of the object using the getClass method
        System.out.println("Default method - getClass(): " + obj.getClass());

        // Display the custom string representation of the object using the toString method
        System.out.println("Overridden method - toString(): " + obj.toString());
    }
}
CustomObject.main(null);

```

    Default method - getClass(): class REPL.$JShell$31$CustomObject
    Overridden method - toString(): CustomObject { Name: 'SampleObject', ID: 101 }


Homework Hack


```Java
// Abstract base class for shapes
abstract class Shape {
    // Abstract method to be implemented by subclasses for drawing the shape
    abstract String draw();
}

// Triangle class extending Shape
class Triangle extends Shape {
    @Override
    String draw() {
        return "Drawing a triangle.";
    }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
    @Override
    String draw() {
        return "Drawing a rectangle.";
    }
}

// Hexagon class extending Shape
class Hexagon extends Shape {
    @Override
    String draw() {
        return "Drawing a hexagon.";
    }
}

// Class to test the shape drawing functionality
public class ShapeTest {
    public static void main(String[] args) {
        // Create an array of Shape references
        Shape[] shapes = new Shape[3];
        shapes[0] = new Triangle();
        shapes[1] = new Rectangle();
        shapes[2] = new Hexagon();

        // Iterate through the array and draw each shape
        for (Shape shape : shapes) {
            System.out.println(shape.draw());
        }
    }
}
ShapeTest.main(null);

```

    Drawing a triangle.
    Drawing a rectangle.
    Drawing a hexagon.


# FRQ 


```Java
// Class representing a generic Book
class Book {
    private String title;
    private double price;

    // Constructor to initialize title and price
    public Book(String title, double price) {
        this.title = title;
        this.price = price;
    }

    // Getter for the title
    public String getTitle() {
        return title;
    }

    // Getter for the price
    public double getPrice() {
        return price;
    }

    // Method to get book information
    public String getBookInfo() {
        return "Title: " + title + ", Price: $" + price;
    }
}

// Class representing a Textbook that extends Book
class Textbook extends Book {
    private int edition;  // Edition number of the textbook

    // Constructor for Textbook
    public Textbook(String title, double price, int edition) {
        super(title, price);  // Call the superclass constructor
        if (edition <= 0) {
            throw new IllegalArgumentException("Edition must be a positive integer.");  // Error handling for invalid edition
        }
        this.edition = edition;
    }

    // Getter for the edition
    public int getEdition() {
        return edition;
    }

    // Method to determine if this textbook can substitute for another
    public boolean canSubstituteFor(Textbook other) {
        return this.getTitle().equals(other.getTitle()) && this.edition >= other.getEdition();
    }

    // Override getBookInfo to include edition
    @Override
    public String getBookInfo() {
        return super.getBookInfo() + ", Edition: " + edition;
    }

    // Override toString for a detailed string representation
    @Override
    public String toString() {
        return "Textbook [Title: " + getTitle() + ", Price: $" + getPrice() + ", Edition: " + edition + "]";
    }
}

// Class to test the functionality of Textbook
public class TextbookTest {
    public static void main(String[] args) {
        // Create instances of Textbook
        Textbook textbook1 = new Textbook("Java Programming", 59.99, 3);
        Textbook textbook2 = new Textbook("Java Programming", 59.99, 2);
        Textbook textbook3 = new Textbook("Data Structures", 79.99, 1);

        // Display book information
        System.out.println(textbook1.getBookInfo());
        System.out.println(textbook2.getBookInfo());
        System.out.println(textbook3.getBookInfo());

        // Check if textbooks can substitute for one another
        System.out.println("Can textbook1 substitute for textbook2? " + textbook1.canSubstituteFor(textbook2));  // true
        System.out.println("Can textbook2 substitute for textbook1? " + textbook2.canSubstituteFor(textbook1));  // false
        System.out.println("Can textbook1 substitute for textbook3? " + textbook1.canSubstituteFor(textbook3));  // false

        // Display detailed information using toString
        System.out.println(textbook1.toString());
        System.out.println(textbook2.toString());
        System.out.println(textbook3.toString());
    }
}

TextbookTest.main(null);

```

    Title: Java Programming, Price: $59.99, Edition: 3
    Title: Java Programming, Price: $59.99, Edition: 2
    Title: Data Structures, Price: $79.99, Edition: 1
    Can textbook1 substitute for textbook2? true
    Can textbook2 substitute for textbook1? false
    Can textbook1 substitute for textbook3? false
    Textbook [Title: Java Programming, Price: $59.99, Edition: 3]
    Textbook [Title: Java Programming, Price: $59.99, Edition: 2]
    Textbook [Title: Data Structures, Price: $79.99, Edition: 1]


# MC Answers:

Answer: c , it should be public

Answer: b, isSalty()