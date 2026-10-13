import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './Layout/Layout'
import NotFoundPage from "./pages/NotFoundPage"
import DetailPage from "./pages/DetailPage"

function App() {

  return (

    <div className="">
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<HomePage />} index />
          <Route element={<DetailPage/>} path='/products/:id'/>
          <Route element={<NotFoundPage />} path='*' />
        </Route>
      </Routes>
    </div>
  )
}

export default App
