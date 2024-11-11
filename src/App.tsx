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
import Header from "./components/shared/Header";
import Footer from './components/shared/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Netflix from './pages/Netflix';
import Employees from './pages/Employees';
import About from './pages/About';
import Contact from './pages/Contact';
import AddEmployee from './components/employees/AddEmployee';
import EmployeeDetails from './components/employees/EmployeeDetails';
import Spotify from './pages/Spotify';

// Component defn 
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <Header />

      <main className="container mt-5 pt-2">
        {/* Routing Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/netflix" element={<Netflix />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App
