# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: Iteration is a process in which the same series of logical steps are repeated on each element within a piece of data or input.

  Researched answer: The online definitions are basically just more wordy versions of my answer. "A process wherein a set of instructions or structures are repeated in
                      a sequence a specified number of times or until a condition is met" - techopedia. The key point that I did not mention is that the iteration may
                      end when a condition is met.



2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: I cannot remember offhand what the params for .map are other than a code block. This code block can be a hardcoded value or an inline function that operates on each iteration

  Researched answer: The three params are (element, index, array). However, these are actually the params of the callback function, which is the true param for .map()
                      As far as the callback function goes, the element is a required param, while index and array are optional. There is one last optional argument that
                      can be placed following the callback function's code block called thisArg, which sets a value to the 'this' keyword for the duration of the block



3. What is object destructuring?

  Your answer: Destructuring is a way to select a specific value based on a key from an object and assign that value to a variable, all in one statement.
              By declaring a variable with { curly brackets } around it, JS knows that you are looking for that variable as a key in the object you assign its value to

  Researched answer: There are a couple other ways of destructuring an object besides the specific method I described above, including ({i, j} = objectWithIAndJKeys)
                      There are also several ways to interact/assign new values to the destructured object, all of which look pretty ugly. I.E.
                      const {a: aa = 10, b: bb = 5} = {a: 3} which creates aa and bb variables with values 3 and 5 respectively



4. What is the difference between an object and a class?

  Your answer: An object is a {piece: of data} while a class is a function that is used to create templated objects with predefined behavior. An object is
                a one specific instance. A class can create that instance. Classes also are capable of inheritance from other classes, allowing for
                huge flexibility in creating new objects with similar but distinct behavior.

  Researched answer: A class is a template for objects that defines object properties as well as behaviors. An object is a member or "instance" of a class
                    that has a state filled with key-value pairs. This state can be explicitly defined or can be described by the class it is a member of.



5. Why would you use the method super()?

  Your answer: The method super() is built-in to classes in Javascript, and is used to tell a new class inheriting from  an old class exactly which props
              from the old class to include in the new one. It will automatically include any hardcoded props, but those passed into the class as params
              will need to be specifically invoked in the args of super() in order to be passed down to the child

  Researched answer: Super is a keyword that accesses the parent of an object. The method super() specifically is invoked in the constructor of a child class
                      to describe which elements of the parent class to inherit.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is Javascript's capacity to use a variable before it is declared/initialized. It is possible to initialize a variable later on down the line
                when it has already been invoked previously. However, typically this makes for less readable code and can make it difficult to debug

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React: React is a javascript library developed and first implemented by Facebook that allows Javascript to speak HTML with complex logic and behavior.
          React is built upon 'components' which are reusable pieces of code that produce logic and/or JSX(javascript syntax that produces HTML).
          One important distinct property of React is that its components can hold individual and correspondive pieces of state that allow for interaction/modification of the GUI.
          In many applications React is used with classes, I.E. class MyComponent extends React.component{}. However, in recent years 'hooks' were introduced, allowing
          for a different structure of component and different methods of holding state.

2. React lifecycle methods: These are built-in methods to the React.component or React in general that allow for delayed action in code blocks. For instance,
                            when rendering a React component there are certain functions within it that cannot be executed until the component
                            is fully rendered. There are also some methods that must run BEFORE the render, and then of course render() itself is yet another lifecycle
                            method. If not invoked specifically, many of these methods do run in the background during the React mounting lifecycle. Every time state is updated,
                            the React lifecycle repeats.

3. React state: State in React allows individual pieces of the app to have their own individual moddable properties. This state represents nearly everything
                interactive about a user experience, including authContext(if youre logged in or not), profile data, messaging, modals being open or closed, even the
                theme or color scheme.

4. Component invocation/call: There are multiple ways to invoke a component in React, but the main and most common one is to use it as a JSX tag in your return/render block.
                              For instance, if my component were called NavigationBar, I could invoke it anywhere in my JSX as <NavigationBar/>. Any props I need to pass into it
                              are placed inside the </> using the prop='string' syntax. However, in some cases you can use {curly braces} and invoke the actual function
                              of the component within. This would still be placed in the JSX block, so the curly braces are needed to tell React to read the following as
                              regular javascript and then continue rendering pure JSX.

5. DOM Events: DOM is Document Object Model. It represents the frontend page that we as users see for the methods and logic of the frontend. A DOM event is any sort of change
              or interaction with the DOM. It can come from the user or from the logic of the page itself. Typing into a textfield is an event. Clicking a button is an event.
              Fetching data from a server can also be a DOM event.
