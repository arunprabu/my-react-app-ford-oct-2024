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

-------

Any to Any Component Communication
---
  Implementing Context API Steps for any to any component communication
  ===
    1. Create a new context  in contexts/PlaylistContext.tsx
    2. Provide the context to the necessary components
      2.1. ContextProvider  is needed for us to supply the data
      2.2. It should be accessible to the necessary the components
    3. consume the context in the necessary components with useContext 


====
====
ReactJS - Performace Tips
--
1. Use NPM package or any third party libraries only if absolutely needed.
2. Most performance issues come in lists. So, think about having pagination.
  Try this awesome package
  https://bvaughn.github.io/react-virtualized/
3. Make use of props wisely. Don't leave out unused props. 
 
  So, a bad way could be...
  const MyComp = (props) => { //bad way if all props are not used

  }

  but a better way to have props here.. using object destructuring.
  cont MyComp = ({ title, body, postId}){ // ignoring userId, if I don't display it anywhere

  }
  Also,don't pass unneccessary props. 

4. Lazy Load Images 
  https://www.npmjs.com/package/react-lazy-load-image-component
5. Use profiler to record the app pages. And then check and fix the app. 
6. Think about optimizing back end also. 
7. Avoid having unnecessary tags, css. go with Fragment, <></>, 
9. Don't bloat the page with too many components, 
  because components will have re-rendering cycles.
  If one parent comp updates, that will update child comp's till the last level.
10. Don't create even a single class component. Use ONLY functional components. 
  Use hooks to stop child comp re-rendering. Remember useEffect, useCallback!
11. Don't write too many inline styles. You should definitely avoid it inside loops.

13. use useMemo, useCallback hooks
14. Learn more performance tips.. There are aplenty.



  
  Rules of Hooks (10 mins)
  ----- 
    * use the hooks only in functional components
    * use the hooks only on top level 
    * don't use hooks inside loops, conditonals (if else, switch case)
    * don't use hooks inside event handlers, callbacks and functions 



  Build and Deployment (10 mins)
  ----
    npm run build     
