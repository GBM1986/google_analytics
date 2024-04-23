import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'
import ReactGA from 'react-ga4'

function App() {
  // ReactGA.initialize('')
  return <RouterProvider router={routes} />
  
}

export default App
