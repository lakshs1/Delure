import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import PlaceOrder from './pages/placeorder'
import Orders from './pages/orders'
import Navbar from './components/navbar'

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
    </Routes>
    </div>
  )
}

export default App
