/* Skeleton of a component 
  * can have import 
  * must have a component defn fn that returns JSX
  * must have export

Component is made up of...
  1. TS 
  2. JSX 
  3. CSS (optional)
*/

import './App.css'
import Header from "./components/Header";
import Footer from './components/Footer';

// Component defn 
function App() {
  // must return JSX
  return (
    <div>
      <Header />

      <main className='container mt-5 pt-2'>
        <h1>Success!</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App
