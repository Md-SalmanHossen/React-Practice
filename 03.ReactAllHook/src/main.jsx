import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './useState/Counter';
import Todo from './useState/Todo.jsx';
import ObjectPassing from './useState/ObjectPassing.jsx';
import FormManage from './useState/FormManage.jsx';
import FormManageEmail from './useState/FormMangeEmail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Counter/>
    <ObjectPassing/>
    <Todo/>
    <FormManage/>
    <FormManageEmail/>
  </React.StrictMode>,
)
