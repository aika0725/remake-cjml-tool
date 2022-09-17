import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Document from './Document/Document'
import Overview from './Document/Overview'
import Basic from './Document/Basic'
import Risk from './Document/Risk'
import Usage from './Document/Usage'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/document' element={<Document />}>
        <Route index element={<Overview />} />
        <Route path='overview' element={<Overview />} />
        <Route path='usage-of-the-tool' element={<Usage />} />
        <Route path='cjml-basics' element={<Basic />} />
        <Route path='risk-management' element={<Risk />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
