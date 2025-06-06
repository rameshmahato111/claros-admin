import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/LayOut'
import Products from './pages/Products'

import User from './pages/User'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
         
         <Route index element={<Home />}/>
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<User />} />
          

          <Route path='/*' element={<p>Page not found.</p> }/>


          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
