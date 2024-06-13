import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Home'
import RegisterPage from './Pages/Register/Index'
import LoginPage from './Pages/Login/Index'
import MenuPage from './Pages/Menu/Index'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
