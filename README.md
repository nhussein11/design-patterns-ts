# Singleton

Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Problem

The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:

    1) Ensure that a class has just a single instance. Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource—for example, a database or a file.
    Imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you’ll get the one you already created.
    Note that this behavior is impossible to implement with a regular constructor since a constructor call must always return a new object by design.

    2) 