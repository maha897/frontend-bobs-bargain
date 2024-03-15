import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import BrowsePage from './components/BrowsePage'
import { createContext, useState } from 'react'
import SignUpPage from './components/SignUpPage'
import LogInPage from './components/LogInPage'
import AdForm from './components/AdForm'
import CategoriesPage from './components/CategoriesPage'

const Context = createContext()

function App() {
  const [ads, setAds] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState(null) 
  const [users, setUsers] = useState([])

  return (
    <Context.Provider value={{ ads, setAds, userLoggedIn, setUserLoggedIn, users, setUsers }}>
      <div className='app'>
        <Header />
        <SideMenu />
        
        <div className='page'>
          <Routes>
            <Route path="/" element={<BrowsePage />}/>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path='/log-in' element={<LogInPage />} />
            <Route path="/new-ad" element={<AdForm />} />
            <Route path='/categories' element={<CategoriesPage />} />
          </Routes>
        </div>
      </div>
    </Context.Provider>
  )
}

export { App, Context }
