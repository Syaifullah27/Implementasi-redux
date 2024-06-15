// import { useRoutes } from 'react-router-dom'
import './App.css'
import { routeList } from './routes/routeList'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  // let element = useRoutes(routeList)

  // return element

  return <RouterProvider router={routeList} />

}

export default App
