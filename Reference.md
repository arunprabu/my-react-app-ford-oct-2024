Creating React App
---
  1. with JavaScript
  2. with TypeScript [RECOMMENDED]


===
Build Tool
----
  1. Webpack 
  2. Vite [Preferred]

====

create react app using vite 
  > npm create vite@latest
  then enter the project name, select react and typescript 



File walkthrough
Current App Arch 
How React apps are running?


====
Components
----
  1. Functional Components 
    1.1 Fn components with Named Function [DONE]
    1.2 Fn components with Anonymous Function [DONE]
    1.3 Fn components with Arrow Function [RECOMMENDED]
  2. Class Components [NOT RECOMMENDED]


JSX
===
  * Will look like HTML. but not.
  * JSX must have closing tags. either self-closing or separate tags
  * class attribute should be replaced with className


Agenda
---
  Core Concepts
    1. Props 
    2. States 
    3. Events 
    4. Conditional Rendering 
    5. Lists and Keys 

Routing 
----

  Single Page App (SPA)
  ======================
    7 Characteristics
    -----------------
      1. Pages should NOT reload 
      2. URL should change [DONE]
      3. Browser history should be maintained w/o page refresh 
      4. Header and Footer should not be loaded again and again
      5. The section header and footer should show contextual updates 
      6. Active Menu should be set 
      7. Page Title should also be changed 



  npm i react-router-dom 

  Step 1: 
    Identify the urls for the menu items 
      - Home                      localhost:5173/
      - Netflix                   localhost:5173/netflix
      - Employees                 localhost:5173/employees
      - About                     localhost:5173/about
      - Contact                   localhost:5173/contact
       
     
  Step 2: Let's setup the urls in Menu List component 
    Let's check the app. URLs changed.

  Step 3: 
