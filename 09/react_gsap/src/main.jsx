import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App'
import './index2.css'
import App2 from './App2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/*<App />  stopping this and rendering another app which have different animations  */}
    <App2 />
  </StrictMode>,
)
