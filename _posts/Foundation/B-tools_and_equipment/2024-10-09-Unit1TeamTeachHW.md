---
---
```Java
int variable123 = 123;
System.out.println(variable123);
```
    123
# Question 2
## What is the value of the following expression in Java: 5 / 2?
a) 2.5
b) 3
c) 2
d) 2.0
Answer:
 c) 2
Explanation
It is c because dividing two integers truncates the decimal part. When dividing 5 / 2, the result is 2, since 0.5 is discarded.
```Java
int intResult = 5 / 2;
System.out.println(intResult);  // Output: 2
double doubleResult = 5.0 / 2;
System.out.println(doubleResult);  // Output: 2.5
```
    2
    2.5
```Java
int myInt = 10;             // Integer
double myDouble = 5.99;     // Floating-point
float myFloat = 3.14f;      // Single precision floating-point
long myLong = 100000L;      // Long integer
short myShort = 500;        // Short integer
byte myByte = 100;          // Byte
System.out.println(myInt + ", " + myDouble + ", " + myFloat + ", " + myLong + ", " + myShort + ", " + myByte);
```
    10, 5.99, 3.14, 100000, 500, 100
# Question 3
## Which primitive type is used to represent a single character in Java?
a) char
b) String
c) int
d) byte
Answer:
 a) char
Explanation
It is a because char represents a single character, whereas String represents a sequence of characters.
```Java
char letter = 'A';          // Char type
boolean isTrue = true;      // Boolean type
System.out.println(letter);  // Output: A
System.out.println(isTrue);  // Output: true
```
```Java
String name = "John";       // String type
System.out.println(name);   // Output: John
```
# Question 4
## Answer the following questions based on the code cell:
```Java
public class Person {
    String name;
    int age;
    int height;
    String job;
    public Person(String name, int age, int height, String job) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.job = job;
    }
}
public static void main(String[] args) {
    Person person1 = new Person("Carl", 25, 165, "Construction Worker");
    Person person2 = new Person("Adam", 29, 160, "Truck Driver");
    Person person3 = person1;
    int number = 16;
    System.out.println(number);
}
main(null);  // This is required in Jupiter Notebook to run the main method.
```
a) What kind of types are person1 and person2?
Answer: They are of type Person.
b) Do person1 and person3 point to the same value in memory?
Answer: They do not since they are different objects.
c) Is the integer number stored in the heap or in the stack?
Answer: It is stored in the stack memory.
d) Is the value that person1 points to stored in the heap or in the stack?
Answer: It is stored in the heap memory.
# Question 5
a) Define primitive types and reference types in Java.
Primitive types: These are the basic data types in Java, such as int, double, boolean, and char. They are stored in the stack memory and represent simple values.
Reference types: These are objects or arrays in Java that refer to memory addresses. They are stored in the heap memory and include classes like String, arrays, and user-defined types such as Person.
b) Add comments for primitive types and reference types. In terms of memory allocation, discuss concepts like instance, stack, and heap where it adds value.
```Java
public class Account {
    public String name;  // This is a reference type, stored in the heap.
    public double balance;  // This is a primitive type, stored in the stack.
    public int accountNumber;  // This is a primitive type, stored in the stack.
    public static int lastAccountNumber;  // This is a static variable, stored in the stack.
    private static double interestRate = 0.01;  // This is a primitive type, stored in the stack (1%).
    Account(String name, double balance) {
        this.name = name;
        this.balance = balance;
        this.accountNumber = lastAccountNumber;
        lastAccountNumber += 1;
    }
    public void calculateInterest() {
        this.balance += balance * interestRate;  // Adds interest to the balance
    }
    public double getBalance() {
        return this.balance;
    }
}
```
```Java
Account person1 = new Account("Jon", 100000);  // Creating a new Account object for person1
person1.calculateInterest();  // Calculates interest for person1
System.out.println(person1.getBalance());  // Output: 101000.0
```
    |   Account person1 = new Account("Jon", 100000);
    cannot find symbol
      symbol:   class Account
    |   Account person1 = new Account("Jon", 100000);
    cannot find symbol
      symbol:   class Account