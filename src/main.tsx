import { StrictMode } from 'react' // official react library
import { createRoot } from 'react-dom/client' // React package for working with the DOM.
import './index.css'  // global styles
import App from './App.tsx' // app comp

// App Component is rendered in a div element which has an id root
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
