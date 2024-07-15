import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Conditional from './components/Conditional.jsx'
import IIF from './components/IIF.jsx'
import Loop from './components/Loop.jsx'
import IfElse from './components/IfElse.jsx'
import Swtich from './components/Swtich.jsx'
import TernaryConditional from './components/TernaryConditonal.jsx'
import LogicalAnd from './components/Logical&&.jsx'
// import Hero from './components/Hero.jsx'
import ComponentApp from './components/ComponentApp.jsx'
import EventHandle from './components/EventHandle.jsx'
import InputForm from './components/InputForm.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App />
    <Conditional/>
    <IIF/>
    <Loop/>
    <IfElse/>
    <Swtich/>
    <TernaryConditional/>
    <LogicalAnd/>
    <ComponentApp/>
    <EventHandle/>
    <InputForm/>
  </React.StrictMode>,
)
