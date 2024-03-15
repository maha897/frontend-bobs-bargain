import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import BrowsePage from './components/BrowsePage'
import { createContext, useState } from 'react'
import data from './assets/data/products'
import SignInPage from './components/SignInPage'
import LoginPage from './components/LogInPage'
import AdForm from './components/AdForm'

const Context = createContext()

function App() {
  const [products, setProducts] = useState(data)
  return (
    <Context.Provider value={{ products, setProducts }}>
      <div className='app'>
        <Header />
        <SideMenu />
        
        <div className='page'>
          <Routes>
            <Route path="/" element={<BrowsePage />}/>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path='/log-in' element={<LoginPage />} />
            <Route path="/new-ad" element={<AdForm />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  )
}

export { App, Context }
