import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import BrowsePage from './components/BrowsePage'
import { createContext, useState } from 'react'
import data from './assets/data/products'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LogInPage'
import AdForm from './components/AdForm'
import CategoriesPage from './components/CategoriesPage'

const Context = createContext()

function App() {
  const [ads, setAds] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState(null) 
  const [users, setUsers] = useState([])

  return (
    <Context.Provider value={{ ads, setAds, userLoggedIn, setUserLoggedIn }}>
      <div className='app'>
        <Header />
        <SideMenu />
        
        <div className='page'>
          <Routes>
            <Route path="/" element={<BrowsePage />}/>
            <Route path="/sign-in" element={<SignUpPage />} />
            <Route path='/log-in' element={<LoginPage />} />
            <Route path="/new-ad" element={<AdForm />} />
            <Route path='/categories' element={<CategoriesPage />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  )
}

export { App, Context }
