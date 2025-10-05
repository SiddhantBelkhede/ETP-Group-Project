import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Add your copmonents in /components folder
// Add your page in /pages folder
// name your page whatever you want
// name it's css file same as your page (so we can all write our own style)
// Add your css file in /src folder
// to import css add 'import "../<file name>.css"; 

// finally add your page route in /App.jsx for react routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
