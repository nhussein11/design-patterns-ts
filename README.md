# Singleton

Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Problem

The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:

    1) Ensure that a class has just a single instance. Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource—for example, a database or a file.
    Imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you’ll get the one you already created.
    Note that this behavior is impossible to implement with a regular constructor since a constructor call must always return a new object by design.

    2) Provide a global access point to that instance. Remember those global variables that you (all right, me) used to store some essential objects? While they’re very handy, they’re also very unsafe since any code can potentially overwrite the contents of those variables and crash the app.
    Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code.
    There’s another side to this problem: you don’t want the code that solves problem #1 to be scattered all over your program. It’s much better to have it within one class, especially if the rest of your code already depends on it.

## Solution

All implementations of the Singleton have these two steps in common:

- Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

If your code has access to the Singleton class, then it’s able to call the Singleton’s static method. So whenever that method is called, the same object is always returned.

## Applicability

-  Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.
    
    - The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.

-  Use the Singleton pattern when you need stricter control over global variables.

    - Unlike global variables, the Singleton pattern guarantees that there’s just one instance of a class. Nothing, except for the Singleton class itself, can replace the cached instance.
    Note that you can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the getInstance method.

### Relations with other Patterns

- A Facade class can often be transformed into a Singleton since a single facade object is sufficient in most cases.

- Flyweight would resemble Singleton if you somehow managed to reduce all shared states of the objects to just one flyweight object. But there are two fundamental differences between these patterns:
    1) There should be only one Singleton instance, whereas a Flyweight class can have multiple instances with different intrinsic states.
    2) The Singleton object can be mutable. Flyweight objects are immutable.

- Abstract Factories, Builders and Prototypes can all be implemented as Singletons.


### Links
[SINGLETON | PATRONES de DISEÑO](https://www.youtube.com/watch?v=GGq6s7xhHzY&ab_channel=BettaTech)
[Curso de Patrones de diseño - 2 Singleton](https://www.youtube.com/watch?v=gocJeOHtj9w&ab_channel=MitoCode)

Pattern or Antipattern?

[The Clean Code Talks - "Global State and Singletons"](https://www.youtube.com/watch?v=-FRm3VPhseI&t=0s&ab_channel=GoogleTechTalks)
[¿Singleton es un antipatrón? | #4 Patrones de Diseño](https://www.youtube.com/watch?v=7g39JuMY2kc&ab_channel=ManuelZapata)
