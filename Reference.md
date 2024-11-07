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


Routing 
----

  Single Page App (SPA)
  ======================
    7 Characteristics
    -----------------
      1. Pages should NOT reload [DONE]
      2. URL should change [DONE]
      3. Browser history should be maintained w/o page refresh [DONE]
      4. Header and Footer should not be loaded again and again [DONE]
      5. The section in between header and footer should show contextual updates [DONE]
      6. Active Menu should be set [TODO]
      7. Page Title should also be changed [TODO]



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
    Put the whole app under the BrowserRouter in App.tsx 

  Step 4:
    Let's have the routing configuration in App.tsx

  Step 5: 
    Let's stop the page refresh. 
    Replace <a href="/"> with <Link to="/"> in MenuList.tsx

  Step 6:
    Check the app. SPA is made.



Agenda
---
  Core Concepts
    1. Props  [DONE]
    2. States  [DONE]
    3. Events [DONE]
    4. Conditional Rendering [DONE]
    5. Lists and Keys [DONE]


Cross Component Communication
---
  1. Parent to Child Component Communication [DONE]
      using props  

  2. Child to Parent Component Communication [DONE]
      using props, states, events
      
  3. Any to Any Component Communication


=====


Employee Manager
---
  List Employees 
    localhost:5173/employees/
  
  Create Employee
    localhost:5173/employees/add

  Employee Details
    localhost:5173/employees/1
    localhost:5173/employees/2345