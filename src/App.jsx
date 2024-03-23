import Footer from './components/Footer'
import Header from './components/Header'
import Herosection from './components/Herosection'
import './App.css'
import Courseitems from './components/Courseitems'
import { useState } from 'react'
function App() {
const [searchTerm,setSearchTerm]=useState('');
const handleSearch = (term)=>{
  setSearchTerm(term);
}

  return (
    <>
    <Header onSearch={handleSearch} />
    <Herosection />
    <Courseitems searchTerm={searchTerm} />
    <Footer />
    </>
  )
}

export default App
