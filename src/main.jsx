import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Path from './routes/path.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Path}>
    <App/>
  </RouterProvider>
)
