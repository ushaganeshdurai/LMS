import React from 'react'
import ReactDOM from 'react-dom/client'
import Bootstrap from './components/Bootstrap.jsx'
import Node from './components/Node.jsx'
import Tailwind from './components/Tailwind.jsx'
import Html from './components/Html.jsx'
import App from './App.jsx'
import Angular from './components/Angular.jsx'
import Reactc from './components/React.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/angular' element={<Angular />} />
    <Route path='/react' element={<Reactc />} />
    <Route path='/' element={<App />} />
    <Route path='/bootstrap' element={<Bootstrap />} />
    <Route path='/html' element={<Html />} />
    <Route path='/node' element={<Node />} />
    <Route path='/tailwind' element={<Tailwind />} />
  </Routes>
  </BrowserRouter>,
)
