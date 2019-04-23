# Rx Marble Design System

##### A design system to visualize functional reactive programming with [ReactiveExtensions](https://github.com/ReactiveX)

As this is work in progress we try to keep everything in google slides.
Find the current version [here](https://docs.google.com/presentation/d/1LlVmTEcoc1LRV00Tp-rDp4kopI-NobC9S2w-w5pC_JA/edit?usp=sharing) and a PDF version to download [here]().

----------------------------------------

> There's more to picture,
> then meets the eye.
> Hey hey, my my.
***Neil Young***

# The idea behind the MarbleDesignSystem

Marble diagrams serve a method for us to visualize processes over time.
This helps programmers and engineers to understand and design reactive processes.

The overall goal of the MarbleDesignSystem is to provide a unified way of reading and creating stream based diagrams,
in particular one specific type of it, the marble diagrams.

This guide explains all building blocks of the design system step by step and in detail.

In general we have some main rules that system follows:
- Consistent
- Intuitive
- Easy
- Detailed
- Customizable

## Consistency

There are several things to follow if you try to create a standard. One of them if more critical for a positive outcome than everything else, consistency.
By working with a standardized, reproducible approach we managed to create a consistent way of drawing marble diagrams.
A set of rules developed over many many iterations, adopted and simplified to serve as a guideline and blueprint for creating and using these diagrams.

## Intuitive

As programming with Rx is hard we made sure to keep it intuitive.
By including a lot of people into the process of the creation of this guide we collected a lot of personal feedback to improve the system.
To make sure we consider a common way interpretation we created several public polls we were collected and evaluated the general understanding.
This helped us to make our system intuitive to understand.

## Easy

As mindset behind the system are several principles. One of them is “Easy to adopt and create”, which means we want to provide a way for everybody to read and create marble diagrams.
To achieve this we create all diagrams in either googleSlides oder Powerpoint. We believe this two options enable a big group of people to edit and draw these diagrams.

## Detailed

Marble diagrams exist since a long time now. As there was no well thought standard out there and not all edge cases considered, people started to create their own solutions to visualize processes. These let to a variety of different ways of drawing these diagrams. Some of the better approaches were able to visualize more complex prozesses, but there is one essential thing which nobody considered yet, but which is most critical to understand processes based on Rx. The internal behavior of operators.
This system is not only providing a consistent, standardized way of drawing marble diagrams, but also offers a way to visualize the internals of operators. Of course based on the systems rules it selfe.

## Customizable

TODO

Index
-----

- DESIGN TOKENS
  - UNIT
  - FONT
  - COLOR
  - SHAPE
  - LINE
  - SIZE
- COMPONENTS
  - TIME
  - TIME PROGRESS
  - CONSUMER EVENT
  - NOTIFICATION
  - COMPLETE
  - ERROR
  - OPERATOR
  - OPERATOR CONTEXT
  - OPERATION
- DIAGRAMS
  - DESCRIPTION
  - LEGEND
  - DIAGRAM
  - BEYOND THE STANDARD

# Links
- [rx marble design system (google slides)](https://bit.ly/rx-marble-design-system_slides)
- [rx marble design system (github repo)](http://bit.ly/rx-marble-design-system-repo)
- [rx marble design system (rxjs github issue)](https://bit.ly/rx-marble-design-system_issue)
